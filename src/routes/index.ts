import { Router, Request, Response } from "express"

const router = Router()

router.get("/", (req: Request, res: Response) => {
  res.render("index", { title: "Express", message: "typescript node express mocha" })
})

export default router
