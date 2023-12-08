import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { useDispatch,useSelector } from "react-redux";
  import {add,remove} from '../features/Slice'
  import { Toaster } from 'react-hot-toast';

   
  export default function Product({theme}) {
    const {item}=useSelector((state)=>state.cart)
    
    
    const dispatch=useDispatch()
    return (
      
<div id={theme} className="pb-10"> 
<Card className="mt-10 w-96 ml-auto mr-auto border-2 card-responsive" id={theme}>
        <CardHeader floated={false} >
          <img
            src={item.img}
            alt="img"
            
            
            
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" className="text-center" >
            Shoes
          </Typography>
          <Typography className="text-center"> 
            {item.price} $
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 text-center">
          <Button  variant="outlined" color="blue" className="mr-5 hover:scale-125 hover:bg-blue-500 hover:text-white mb-3" onClick={()=>dispatch(add(item))}>add</Button>
          <Button  variant="outlined" color="red" className=" hover:scale-125 hover:bg-red-800 hover:text-white mb-3"  onClick={()=>dispatch(remove(item))}>remove</Button>
          <Toaster  position="bottom-left"/>

        </CardFooter>
      </Card>
</div>
      
      
      
    );
  }