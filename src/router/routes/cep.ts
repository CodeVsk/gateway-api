import { CepService } from "@/services/cep-service";
import { Router } from "express";

export default (router: Router): void => {
  const cepService = new CepService();
  router.get("/cep/cached/:cep", async (req, res) => {
    console.log(
      "---------------------------[Requisição recebida do client]---------------------------"
    );
    console.log("Solicitação de requisição recebida de um client");

    const response = await cepService.getInfoByCepCached(req);

    res.send(response);

    console.log("Requisição foi retornada ao client");
    console.log(
      "------------------------------------------------------------------------------------"
    );
  });

  router.get("/cep/nocached/:cep", async (req, res) => {
    console.log(
      "---------------------------[Requisição recebida do client]---------------------------"
    );
    console.log("Solicitação de requisição recebida de um client");

    const response = await cepService.getInfoByCepNoCached(req);

    res.send(response);

    console.log("Requisição foi retornada ao client");
    console.log(
      "------------------------------------------------------------------------------------"
    );
  });

  /**
   * @swagger
   * /api/cep/cached/{cep}:
   *   get:
   *     summary: Retorna as informaçõe do cep.
   *     description: Retorna as informações do cep inserido.
   *     tags:
   *      - Cep (Servidor Externo 1)
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
   *     tags:
   *      - Cep (Servidor Externo 1)
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
