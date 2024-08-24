import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private logLevel: LogLevel = LogLevel.Info;

  setLogLevel(level: LogLevel) {
    this.logLevel = level;
  }

  log(message: string, level: LogLevel = LogLevel.Info) {
    if (level >= this.logLevel) {
      switch (level) {
        case LogLevel.Error:
          console.error(message);
          break;
        case LogLevel.Warn:
          console.warn(message);
          break;
        case LogLevel.Info:
          console.info(message);
          break;
        case LogLevel.Debug:
          console.debug(message);
          break;
      }
    }
  }
}

export enum LogLevel {
  Error = 0,
  Warn = 1,
  Info = 2,
  Debug = 3
}