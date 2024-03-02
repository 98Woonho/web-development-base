# border
- `border` 속성은 요소의 테두리를 지정하기 위해 사용한다.
- 단, `border` 속성은 요소의 네 테두리(상단, 우측, 하단, 좌측)를 모두 지정하기 때문에 유의한다.
- 값
  - 전역 값
  - `[크기] [스타일] [색]` : 요소의 네 테두리의 크기, 스타일, 색깔을 지정한다.`스타일`에 사용할 수 있는 값은 아래와 같다.
    - `dotted` : 둥근 점선
    - `dashed` : 일반 점선
    - `solid` : 실선
    - `double` : 이중 실선
    - `groove` : (파인) 입체 실선
    - `ridge` : (돌출) 입체 실선

# border-top
- `border-top` 속성은 요소의 상단 테두리를 지정하기 위해 사용한다.
- 사용할 수 있는 속성 값이나 용법은 `border`와 동일하다.

# border-right
- `border-right` 속성은 요소의 우측 테두리를 지정하기 위해 사용한다.
- 사용할 수 있는 속성 값이나 용법은 `border`와 동일하다.

# border-bottom
- `border-bottom` 속성은 요소의 하단 테두리를 지정하기 위해 사용한다.
- 사용할 수 있는 속성 값이나 용법은 `border`와 동일하다.

# border-left
- `border-left` 속성은 요소의 좌측 테두리를 지정하기 위해 사용한다.
- 사용할 수 있는 속성 값이나 용법은 `border`와 동일하다.

# border-radius
- `border-radius` 속성은 요소의 테두리를 둥글게 만들기 위해 사용한다.
- `border-radius` 속성은 네 꼭짓점을 모두 둥글게 만들기 때문에 유의한다.
- 값
  - 전역 값
  - `[크기]` : 꼭짓점을 둥글게 만들 반지름을 지정한다. 값이 비율일 때, 각 반지름은 대응되는 가로/세로 크기에 비례함으로 유의한다.
  - `[크기] [크기]` : 크기 값 두 개를 지정할 경우, 첫 번째 값이 좌상단 및 우하단, 두 번째 값이 우상단 및 좌하단 크기가 된다.
  - `[크기] [크기] [크기] [크기]` : 크기 값 네 개를 지정할 경우, 순서대로 좌상단, 우상단, 우하단, 좌하단 크기가 된다.

# border-top-left-radius
- `border-top-left-radius` 속성 값은 요소의 좌상단 꼭짓점을 둥글게 하기 위해 사용한다.
- 값
  - 전역 값
  - `[크기]` : 꼭짓점을 둥글게 만들 반지름을 지정한다.

# border-top-right-radius
- `border-top-right-radius` 속성 값은 요소의 우상단 꼭짓점을 둥글게 하기 위해 사용한다.
- 값
  - 전역 값
  - `[크기]` : 꼭짓점을 둥글게 만들 반지름을 지정한다.

# border-bottom-right-radius
- `border-bottom-right-radius` 속성 값은 요소의 우하단 꼭짓점을 둥글게 하기 위해 사용한다.
- 값
  - 전역 값
  - `[크기]` : 꼭짓점을 둥글게 만들 반지름을 지정한다.

# border-bottom-left-radius
- `border-bottom-left-radius` 속성 값은 요소의 좌하단 꼭짓점을 둥글게 하기 위해 사용한다.
- 값
  - 전역 값
  - `[크기]` : 꼭짓점을 둥글게 만들 반지름을 지정한다.

# border-collapse
- `border-collapse` 속성은 `table` 태그가 가지는 셀(Cell)들이 가지는 테두리가 매몰(상쇄)되어야 하는가에 대한 설정을 위한 속성이다.
- 값
  - 전역 값
  - `collapse` : 테두리가 상쇄되어야 한다는 설정
  - `separate` : 테두리가 분리되어야 한다는 설정(기본 값). `border-spacing` 속성 값에서 지정된 크기만큼 분리된다.

# border-spacing
- `border-spacing` 속성은 `table` 태그가 가지는 셀(Cell)간 간격의 크기를 지정하기 위한 속성이다.
- `border-collapse` 속성 값이 `separate`가 아니면 무시된다.
- 값
  - 전역 값
  - `[크기]` : 셀 간 간격을 지정한다.