import { NextResponse } from 'next/server'
import { writeFile } from "fs/promises"
import path from "path"
import {publicPath} from "@/utils/utils";
import {uploadsPath} from "@/utils/utils";

export async function POST(req, res) {
    const formData = await req.formData();

    const file = formData.get("file");
    if (!file) {
        return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replaceAll(" ", "_");
    console.log(filename);
    try {
        await writeFile(
            path.join(process.cwd(), publicPath+uploadsPath + filename),
            buffer
        );
        //todo: add file to db using php backend - transfer filename and id
        return NextResponse.json({ Message: "Success", status: 201, filename: uploadsPath + filename });
    } catch (error) {
        console.log("Error occured ", error);
        return NextResponse.json({ Message: "Failed:"+error, status: 500 });
    }
}
