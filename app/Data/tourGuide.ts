
import { CardProps } from "../filter/components/TourGuide/components/Card";
import image1 from '@/public/team_1_1.jpg'
import image2 from '@/public/team_1_2.jpg'
import image3 from '@/public/team_1_3.jpg'
import bg1 from "@/public/team_img_1.jpg"
import bg2 from "@/public/team_img_2.jpg"
import bg3 from "@/public/team_img_3.jpg"

import { v4 as uuidv4 } from 'uuid';

const tourGuideData: CardProps[] = [
    {
        id: uuidv4(),
        avatar: image1 as any,
        job: "Tourist Guide",
        userName: "Michel Smith",
        profileBackgeround: bg1 as any
    },
    {
        id: uuidv4(),
        avatar: image2 as any,
        job: "Tourist Guide",
        userName: "Michel Smith",
        profileBackgeround: bg2 as any

    },
    {
        id: uuidv4(),
        avatar: image3 as any,
        job: "Tourist Guide",
        userName: "Michel Smith",
        profileBackgeround: bg3 as any


    },
    {
        id: uuidv4(),
        avatar: image1 as any,
        job: "Tourist Guide",
        userName: "Michel Smith",
        profileBackgeround: bg1 as any


    },
    {
        id: uuidv4(),
        avatar: image2 as any,
        job: "Tourist Guide",
        userName: "Michel Smith",
        profileBackgeround: bg2 as any


    }
]

export default tourGuideData