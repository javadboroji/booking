import apiResponse from "@/app/helper/apiResponse"
const categories = [
    {
        id: "cat-1",
        image: "/category_1_1.jpg",
        title: "Cruisea"
    },
    {
        id: "cat-2",
        image: "/category_1_2.jpg",
        title: "Hiking"
    },
    {
        id: "cat-3",
        image: "/category_1_2.jpg",
        title: "Airbirds"
    },
    {
        id: "cat-4",
        image: "/category_1_3.jpg",
        title: "Wildlife"
    },
    {
        id: "cat-22",
        image: "category_1_4.jpg",
        title: "Cruisea"
    },
]
export async function GET() {
    try {
   return  await   apiResponse({
            message: "",
            statusCode: 200,
            type: "success",
            data: categories
        })
    } catch (error) {
     return await  apiResponse({
            message: error as any,
            statusCode: 500,
            type: "error",
            data: null
        })
    }
}