import { Typography } from "@material-tailwind/react";
 
export default function SimpleFooter({theme}) {
  return (
    <footer id={theme} className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6  md:justify-between text-center pb-16 ">
      
        <Typography  className="font-normal text-center ml-auto mr-auto pt-4">
            &copy; 2023 Jaafar Harabi
        </Typography>
      
      
     
      
    </footer>
  );
}