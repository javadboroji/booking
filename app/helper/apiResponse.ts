import { NextResponse } from "next/server"
interface apiResponseProps {
    type: "error" | "success",
    message: string,
    data: any,
    statusCode: 200|201 | 400 | 500 | 403
}

const apiResponse = async (arrg: apiResponseProps) => {
    switch (arrg.type) {
        case "error":
            return NextResponse.json({ message: arrg.message }, { status: arrg.statusCode })
        case "success":
            return NextResponse.json({ message: arrg.message, data: arrg.data }, { status: arrg.statusCode })
        default:
            break;
    }
}

export default apiResponse