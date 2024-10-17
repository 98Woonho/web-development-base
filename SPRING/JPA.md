# JPA
- JPA(Java Persistence API)는 객체와 관계형 데이터베이스 간의 매핑을 쉽게 처리할 수 있도록 도와주는 표준 API이다.
- Java 애플리케이션에서 데이터를 영구 저장할 수 있는 ORM(Object-Relational Mapping) 기술 중 하나로, 데이터베이스 테이블을 객체화하여 객체 지향적으로 데이터를 다룰 수 있도록 한다.

## 주요 개념 및 특징
### 1. 엔티티(Entity)
- 데이터베이스의 테이블에 대항하는 클래스이다. 이 클래스는 @Entity 어노테이션을 통해 선언되며, 클래스의 각 필드는 데이터베이스의 컬럼과 매핑된다.
### 2. Repository 인터페이스
- JPA를 사용하면 기본적인 CRUD 작업을 위한 쿼리를 직접 작성할 필요가 없다. `JpaRepository`나 `CrudRepository`와 같은 인터페이스를 상속받아 사용하면, 기본적인 데이터 처리 로직은 자동으로 구현 된다.
### 3. JPQL(Java Persistance Query Language)
- JPA는 JPQL이라는 쿼리 언어를 제공한다. JPQL은 SQL과 유사하지만, 테이블이 아닌 객체를 대상으로 쿼리를 실행한다.
### 4. 트랜잭션 관리
- JPA는 트랜잭션 관리를 위해 Spring의 `@Transactional` 어노테이션을 사용한다. 이 어노테이션을 통해 데이터 변경 작업이 트랜잭션 내에서 안전하게 수행되도록 보장한다.
### 5. 캐싱(Caching)
- JPA는 엔티티를 캐싱하여 데이터베이스로부터의 반복적인 읽기 작업을 줄일 수 있다. 이는 성능 향상에 도움이 된다.

## JPA의 장점
- 코드 간소화 : CRUD, 페이징, 정렬 등 기본적인 작업을 위한 코드가 자동으로 생성된다.
- DB 독립성 : 데이터베이스에 종속되지 않고 여러 DB와 호환된다.
- 직관적인 쿼리 메서드 : 메서드 이름으로 동작을 유추할 수 있는 방식으로 쿼리를 자동 생성한다. (예 : `findByName`, `findByAgeGreaterThan`)
- 동적 쿼리 지원 : 필요에 따라 JPQL 또는 Criteria API를 사용해 동적 쿼리를 작성할 수 있다.

## 예시
```java
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private int age;

    // Getter, Setter
}

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByName(String name);
}
```

위 예제에서 `UserRepository`는 `JpaRepository`를 상속받아 기본 CRUD 메서드를 사용할 수 있고, `findByName`과 같은 커스텀 메서드도 작성할 수 있다.