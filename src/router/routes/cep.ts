import { CepService } from "@/services/cep-service";
import { Router } from "express";

export default (router: Router): void => {
  const cepService = new CepService();
  router.get("/cep/cached/:cep", async (req, res) => {
    const response = await cepService.getInfoByCepCached(req);

    res.send(response);
  });

  router.get("/cep/nocached/:cep", async (req, res) => {
    const response = await cepService.getInfoByCepNoCached(req);

    res.send(response);
  });

  /**
   * @swagger
   * /api/cep/cached/{cep}:
   *   get:
   *     summary: Retorna as informaçõe do cep.
   *     description: Retorna as informações do cep inserido.
   *     parameters:
   *       - in: path
   *         name: cep
   *         required: true
   *         description: Insira seu cep.
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Executado com sucesso.
   *
   * /api/cep/nocached/{cep}:
   *   get:
   *     summary: Retorna as informaçõe do cep.
   *     description: Retorna as informações do cep inserido.
   *     parameters:
   *       - in: path
   *         name: cep
   *         required: true
   *         description: Insira seu cep.
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Executado com sucesso.
   */
};
