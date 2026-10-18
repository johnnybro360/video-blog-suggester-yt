import { ingestYouTubeVideosWorkflow } from "@/workflows/ingestYouTubeVideosWorkflow";
import { NextRequest } from "next/server";
import { verifyAndRunCron } from "@/workflows/utils/verifyAndRunCron";

export async function GET(request: NextRequest) {
  return await verifyAndRunCron(request, ingestYouTubeVideosWorkflow);
}
