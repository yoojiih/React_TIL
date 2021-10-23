//상품 데이터 스키마 (data.js 파일)
//상품정보를 object {} 자료형에 담아 3개를 하나의 array에 담음
//변수에 저장했다가 export default 변수명 or 그냥 자료 그대로 export default 뒤에 집어넣어도 됨.
// export default로 내보낸 데이터는 import시 import 변수명 from '경로'; 변수명 자유작명가능

export default[
    {
      id : 0,
      title : "White and Black",
      content : "Born in France",
      price : 120000
    },
  
    {
      id : 1,
      title : "Red Knit",
      content : "Born in Seoul",
      price : 110000
    },
  
    {
      id : 2,
      title : "Grey Yordan",
      content : "Born in the States",
      price : 130000
    }
  ] 

