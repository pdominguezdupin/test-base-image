import { NextFunction, Request, Response } from 'express';
import { getServiceVersion } from '../../common/utils/version.resolver';
import { getServiceEnvironment } from '../../common/utils/environment.resolver';

export class HealthController {
  public async getHealthStatus(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const version: string = await getServiceVersion();
      const environment: string = await getServiceEnvironment();
      res.status(200).json({
        success: true,
        health: 'Up! Nuevo mensaje de la suerte fran sape',
        version,
        environment,
      });
    } catch (err: any) {
      next(err);
    }
  }
}
