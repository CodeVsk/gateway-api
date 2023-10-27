import { PokedexService } from "@/services/pokedex-service";
import { QRCodeService } from "@/services/qrcode-service";
import { Router } from "express";

export default (router: Router): void => {
  const qrCodeService = new QRCodeService();
  router.get("/qrcode/:qrcode", async (req, res) => {
    const response = await qrCodeService.generateQRCodeNoCached(req);

    res.send(response);
  });

  /**
   * @swagger
   * /api/qrcode:
   *   get:
   *     description: Rota responsável por gerar uma imagem qrcode
   *     responses:
   *       '200':
   *         description: Resposta de sucesso
   *
   */
};
