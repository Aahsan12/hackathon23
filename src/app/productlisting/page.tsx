import React from "react";
import Image from 'next/image'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import Footer from "@/components/footer"; 
  
const Productlisting = () => {

return(
    <div>
        <div className="relative">
    {/* Background Image */}
    <Image 
        src="/images/Productmain.jpg" 
        width={1440} 
        height={400} 
        alt="Main" 
        className="h-80 w-full object-cover object-center overflow-hidden"
    />
    
    {/* Heading Overlay */}
    <h1 className="absolute inset-0 flex items-start justify-start text-white text-4xl font-bold mt-56 ml-20">
        All Products
    </h1>
</div>


        <NavigationMenu>
    <NavigationMenuList>
        <NavigationMenuItem>
         <NavigationMenuTrigger>Category</NavigationMenuTrigger>
         <NavigationMenuTrigger>Product Type</NavigationMenuTrigger>
         <NavigationMenuTrigger>Price</NavigationMenuTrigger>
         <NavigationMenuTrigger>Brand</NavigationMenuTrigger>
            <NavigationMenuContent>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

 {/* First Row */}
<div className="grid grid-cols-4 gap-4 py-10 px-16">
    <div>
        <Image 
            src="/images/main chiar.png" 
            width={305}
            height={375}
            alt="Dandy Chair"
            className="w-[305px] h-[375px] object-cover"
        />
        <p className="py-5 text-lg">The Dandy Chair</p>
        <p className="text-lg">$250</p>
    </div>
    <div>
        <Image 
            src="/images/image 2.jpg" 
            width={305}
            height={375}
            alt="Dandy Chair"
            className="w-[305px] h-[375px] object-cover"
        />
        <p className="py-5 text-lg">Rustic VaseSet</p>
        <p className="text-lg">$155</p>
    </div>
    <div>
        <Image 
            src="/images/image 3.jpg" 
            width={305}
            height={375}
            alt="Dandy Chair"
            className="w-[305px] h-[375px] object-cover"
        />
        <p className="py-5 text-lg">The Silky Vase</p>
        <p className="text-lg">$125</p>
    </div>
    <div>
        <Image 
            src="/images/image 4.jpg" 
            width={305}
            height={375}
            alt="Dandy Chair"
            className="w-[305px] h-[375px] object-cover"
        />
        <p className="py-5 text-lg">The Lucy Lamp</p>
        <p className="text-lg">$399</p>
    </div>
</div>

 {/* Second Row */}
<div className="grid grid-cols-4 gap-4 py-10 px-16">
    <div>
        <Image 
            src="/images/image 5.jpg" 
            width={305}
            height={375}
            alt="Dandy Chair"
            className="w-[305px] h-[375px] object-cover"
        />
        <p className="py-5 text-lg">The Dandy Chair</p>
        <p className="text-lg">$250</p>
    </div>
    <div>
        <Image 
            src="/images/image 6.jpg" 
            width={305}
            height={375}
            alt="Dandy Chair"
            className="w-[305px] h-[375px] object-cover"
        />
        <p className="py-5 text-lg">Rustic VaseSet</p>
        <p className="text-lg">$155</p>
    </div>
    <div>
        <Image 
            src="/images/image 7.jpg" 
            width={305}
            height={375}
            alt="Dandy Chair"
            className="w-[305px] h-[375px] object-cover"
        />
        <p className="py-5 text-lg">The Silky Vase</p>
        <p className="text-lg">$125</p>
    </div>
    <div>
        <Image 
            src="/images/image 8.jpg" 
            width={305}
            height={375}
            alt="Dandy Chair"
            className="w-[305px] h-[375px] object-cover"
        />
        <p className="py-5 text-lg">The Lucy Lamp</p>
        <p className="text-lg">$399</p>
    </div>
</div>

{/* Third Row */}

<div className="grid grid-cols-4 gap-4 py-10 px-16">
    <div>
        <Image 
            src="/images/main chiar.png" 
            width={305}
            height={375}
            alt="Dandy Chair"
            className="w-[305px] h-[375px] object-cover"
        />
        <p className="py-5 text-lg">The Dandy Chair</p>
        <p className="text-lg">$250</p>
    </div>
    <div>
        <Image 
            src="/images/image 2.jpg" 
            width={305}
            height={375}
            alt="Dandy Chair"
            className="w-[305px] h-[375px] object-cover"
        />
        <p className="py-5 text-lg">Rustic VaseSet</p>
        <p className="text-lg">$155</p>
    </div>
    <div>
        <Image 
            src="/images/image 3.jpg" 
            width={305}
            height={375}
            alt="Dandy Chair"
            className="w-[305px] h-[375px] object-cover"
        />
        <p className="py-5 text-lg">The Silky Vase</p>
        <p className="text-lg">$125</p>
    </div>
    <div>
        <Image 
            src="/images/image 4.jpg" 
            width={305}
            height={375}
            alt="Dandy Chair"
            className="w-[305px] h-[375px] object-cover"
        />
        <p className="py-5 text-lg">The Lucy Lamp</p>
        <p className="text-lg">$399</p>
    </div>
</div>
</div>
)}
export default Productlisting;