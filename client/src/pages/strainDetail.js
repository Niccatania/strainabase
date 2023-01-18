// Dynamically render data from the databse into this function
export default function strainDetail(){
    const straindetail ={
        strainName: "Watermelon Gelato",
        strainType: "Indica dominant hybrid",
        img: "https://images.leafly.com/flower-images/defaults/purple/strain-18.png?auto=compress,format&w=295&dpr=1",
        description: "This Indica dominat hybrid flower shows beautiful purple colors. The taste is extraordinary and will leave you in a wonderful mood"
    };

    return (
        <div id="strain">
        
      <div>
        <div>
            <h1>{straindetail.strainName}</h1>
            <h2>{straindetail.strainType}</h2>
        </div>
        <img
          key={straindetail.img}
          src={straindetail.img || null}
        />
      </div>
      <div>
            <p>{straindetail.description}</p>
        </div>
        <div>
            <button><a href={"/"}>Back to Home </a></button>
        </div>

        </div>
    )
}