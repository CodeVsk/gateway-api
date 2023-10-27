import { CompareResult } from "@/entities/compare-result";
import { QRCodeProvider } from "@/providers/qrcode";
import { calculateTime } from "@/utils/calculate-time";
import { Request } from "express";

export class QRCodeService {
  private qrCodeProvider: QRCodeProvider;

  constructor() {
    this.qrCodeProvider = new QRCodeProvider();
  }

  async generateQRCodeNoCached(request: Request): Promise<CompareResult> {
    const startTime: number = Date.now();

    const { qrcode } = request.params;

    const result: string = await this.qrCodeProvider.generateQRCode(qrcode);

    const totalTime = calculateTime(startTime);

    return new CompareResult(totalTime, result);
  }
}
