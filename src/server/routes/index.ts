import { NextServer } from "next/dist/server/next";
import { renderAndCache } from "../lib/ssr";

exports.index = (app: NextServer) => (req: any, res: any) => {
	const actualPage = '/';
  const queryParams = {};
  return renderAndCache(app, req, res, actualPage, queryParams)
}