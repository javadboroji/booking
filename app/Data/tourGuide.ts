import { CardProps } from "../filter/components/TourGuide/components/Card";
import image1 from '@/public/team_1_1.jpg'
import image2 from '@/public/team_1_2.jpg'

import image3 from '@/public/team_1_3.jpg'
import { v4 as uuidv4 } from 'uuid';

const tourGuideData: CardProps[] = [
    {
        id: uuidv4(),
        avatar: image1 as any,
        job: "Tourist Guide",
        userName: "Michel Smith"

    },
    {
        id: uuidv4(),
        avatar: image2 as any,
        job: "Tourist Guide",
        userName: "Michel Smith"

    },
    {
        id: uuidv4(),
        avatar: image3 as any,
        job: "Tourist Guide",
        userName: "Michel Smith"

    },
    {
        id: uuidv4(),
        avatar: image1 as any,
        job: "Tourist Guide",
        userName: "Michel Smith"

    },
    {
        id: uuidv4(),
        avatar: image2 as any,
        job: "Tourist Guide",
        userName: "Michel Smith"

    }
]

export default tourGuideData