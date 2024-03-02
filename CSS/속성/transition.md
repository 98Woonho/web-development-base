# transition-duration
- `transition-duration` 속성은 해당 요소에 특정 상황에 따라 변화하는 속성에 따라 해당 속성이 변화하는데 걸리는 시간을 지정하기 위해 사용하는 속성이다.
- 중간 값이 없는 속성 혹은 값 간에 중간 값이 없는 경우, 트랜지션이 작동하지 않음에 유의한다.
- 값
  - 전역 값
  - `[시간]` : 시간은 초(`s`) 혹은 밀리초(`ms`)단위


# transition-delay
- `transition-delay` 속성은 트랜지션이 발생하기 전까지 지연시킬 시간을 지정하기 위해 사용하는 속성이다.
- 값
  - 전역 값
    - `[시간]` : 시간은 초(`s`) 혹은 밀리초(`ms`)단위


# transition-property
- `transition-property` 속성은 트랜지션을 적용시킬 CSS 속성을 지정하기 위해 사용한다.
- 해당 속성에 명시되지 않은 속성은 트랜지션의 효과를 적용받지 않는다.
- 값
  - `none`
  - `all` : 모든(가능한) 속성에 대해 트랜지션을 적용한다. 기본값
  - `[속성 이름, ...]`


# transition-timing-function
- `transition-timing-function` 속성은 트랜지션이 적용되는데 있어, 시간의 흐름에 따른 변화 완료율을 계산하는 함수를 지정하기 위해 사용하는 속성이다.
- 값
  - `ease` : 기본값
  - `ease-in`
  - `ease-out`
  - `ease-in-out`
  - `linear` : 선형. 시간의 흐름에 따른 변화 완료율이 정비례한다.
  - `베지어 곡선 함수`(`cubic-bezier(...)`) : 내가 원하는 함수 만들 때 사용