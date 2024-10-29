import { NextServer } from "next/dist/server/next";
import { renderAndCache } from "../lib/ssr";

exports.items = (app: NextServer) => (req: any, res: any) => {
  const actualPage = '/store-list/items';
  const queryParams = {};
  return renderAndCache(app, req, res, actualPage, queryParams)
}


exports.banner = (app: NextServer) => (req: any, res: any) => {
  const actualPage = '/store-list/banner';
  const queryParams = {};
  return renderAndCache(app, req, res, actualPage, queryParams)
}