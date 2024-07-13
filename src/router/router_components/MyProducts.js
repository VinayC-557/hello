import Product from "./Product";

function MyProducts()
{
    var products=[
        {
            id:1,
            name:"Samsung",
            price:99999,
            imgname:"samsunggalaxym14.jpg",
        },
        {
            id:2,
            name:"Printer",
            price:5999,
            imgname:"canonprinter.jpg",
        },
        {
            id:3,
            name:"JBL",
            price:999999,
            imgname:"jblwirelessbluetooth.jpg",
        },

        {
            id:4,
            name:"IQOOZ95G",
            price:999999,
            imgname:"iqooz95g.jpg",
        },
        {
            id:5,
            name:"OnePlus",
            price:999999,
            imgname:"oneplusnord3.jpg",
        },

        {
            id:6,
            name:"Urbano Fashion ",
            price:681,
            imgname:"jeans.jpg",
        },
        {
            id:7,
            name:"Max ",
            price:699,
            imgname:"jeans2.jpg",
        },
        {
            id:8,
            name:"Urbano Fashion",
            price:599,
            imgname:"jeans3.jpg",
        },

        {
            id:9,
            name:"Trackpants",
            price:999999,
            imgname:"trackpant.jpg",
        },
        {
            id:10,
            name:"peter england",
            price:999999,
            imgname:"peterengland.jpg",
        }
    ]
    function f1(v)
    {
        return(
            <Product key={v['id']} productname={v['name']} price={v['price']} psrc={v['imgname']}/>
        )
    }
    return(
        <div>
            {
                products.map(f1)
            }
        </div>
    );
}

export default MyProducts;