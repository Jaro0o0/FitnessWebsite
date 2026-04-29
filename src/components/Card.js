export function Card({imageSrc , title}){
    return( /*HTML*/
 `       
      <div>
           <!--IMG_BOX-->
        <div >
            <img src='${imageSrc}' class='w-100 h-100 object-cover    [clip-path:polygon(10%_0,_100%_0,_100%_90%,_90%_100%,_0_100%,_0_10%)]'>
        </div>
           <!--TEXT_BOX-->
          <div class='p-4'>
            <p>Carddio Power Boost</p>
          </div>
      </div>
`
    )

}