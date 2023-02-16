import winston from 'winston'
import path from 'path'
// import '../../../config/index.js'

export const logger = winston.createLogger()

if (process.env.HS_NODE_ENV == 'development') {
    logger.add(
        new winston.transports.File({
            level: 'info',
            handleExceptions: true,
            filename: `${path.join(path.resolve(), 'logs/info.log')}`,
            format: winston.format.combine(
                winston.format.json(),
                winston.format.prettyPrint(),
                winston.format.timestamp({
                    format: 'YYYY-MM-DD hh:mm:ss'
                }),
                winston.format.printf((info) => {
                    return `[${info.timestamp}]${info.level}: ${info.message}`
                })
            )
        })
    )
}
if (process.env.HS_NODE_ENV == 'production') {
    logger.add(
        new winston.transports.File({
            level: 'info',
            handleExceptions: true,
            filename: `${path.join(path.resolve(), 'logs/info.log')}`,
            format: winston.format.combine(
                winston.format.json(),
                winston.format.prettyPrint(),
                winston.format.timestamp({
                    format: 'YYYY-MM-DD hh:mm:ss'
                }),
                winston.format.printf((info) => {
                    return `[${info.timestamp}]${info.level}: ${info.message}`
                })
            )
        })
    )
}

winston.add(logger)
