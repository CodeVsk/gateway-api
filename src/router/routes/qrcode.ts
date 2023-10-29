import { PokedexService } from "@/services/pokedex-service";
import { QRCodeService } from "@/services/qrcode-service";
import { Router } from "express";

export default (router: Router): void => {
  const qrCodeService = new QRCodeService();
  router.get("/qrcode/nocached/:qrcode", async (req, res) => {
    console.log(
      "---------------------------[Requisição recebida do client]---------------------------"
    );
    console.log("Solicitação de requisição recebida de um client");

    const response = await qrCodeService.generateQRCodeNoCached(req);

    res.send(response);

    console.log("Requisição foi retornada ao client");
    console.log(
      "------------------------------------------------------------------------------------"
    );
  });

  /**
   * @swagger
   * /api/qrcode/nocached/{qrcode}:
   *   get:
   *     summary: Retorna uma imagem do QRCode.
   *     description: Retorna um imagem do QRCode gerada pela api.
   *     tags:
   *      - QRCode (Servidor Externo 3)
   *     parameters:
   *       - in: path
   *         name: qrcode
   *         required: true
   *         description: Insira um valor.
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Executado com sucesso.
   *
   */
};
