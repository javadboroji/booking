import { IBannerSlides } from "../types";
import image from "@/public/hero_bg_3_1.jpg"
import image2 from "@/public/hero_bg_3_5.jpg"
import image3 from "@/public/hero_bg_3_4.jpg"
import image4 from "@/public/hero_bg_3_2.jpg"
export const bannerSlides:IBannerSlides[] =[
    {
        id:'slide-1',
        imageUrl:(image as unknown) as string,
        title:"Discover The Worls With Our Guide" ,
        subtitle:"Tourm international travel management company with 25 years of experience,specializing in business and maritime travel.",
        url:""
    },
    {
        id:'slide-2',
        imageUrl:(image2 as unknown) as string,
        title:"Discover The Worls With Our Guide" ,
        subtitle:"Tourm international travel management company with 25 years of experience,specializing in business and maritime travel.",
        url:""
    },
    {
        id:'slide-3',
        imageUrl:(image3 as unknown) as string,
        title:"Discover The Worls With Our Guide" ,
        subtitle:"Tourm international travel management company with 25 years of experience,specializing in business and maritime travel.",
        url:""
    },
    {
        id:'slide-4',
        imageUrl:(image4 as unknown) as string,
        title:"Discover The Worls With Our Guide" ,
        subtitle:"Tourm international travel management company with 25 years of experience,specializing in business and maritime travel.",
        url:""
    }
]