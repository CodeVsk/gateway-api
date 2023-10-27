import { Axios } from "@/configs";
import { AxiosInstance } from "axios";

export class QRCodeProvider {
  private axiosConfig: Axios;
  private axios: AxiosInstance;

  constructor() {
    this.axiosConfig = new Axios("https://image-charts.com/");
    this.axios = this.axiosConfig._axios;
  }

  async generateQRCode(value: string): Promise<string> {
    const result = await this.axios.get(
      `chart?chs=150x150&cht=qr&chl=${value}&choe=UTF-8`
    );

    return result.data;
  }
}
