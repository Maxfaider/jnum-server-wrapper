'use strict';

var winston = require("winston");

var levels = {critical: 1, error: 2, warning: 3, notice: 4, info: 5, debug: 6};

exports.Logger = function (context, filespath = []) {
    const { combine, timestamp, label, printf } = winston.format;

    const MessageFormat = printf(info => {
        return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
    });

    var winstonLog = winston.createLogger({
        levels: levels,
        format: combine(
            label({ label: context }),
            timestamp(),
            MessageFormat
        ),
        transports: getTransport(filespath)
    });

    function getTransport(filespath) {
        var transports = [new winston.transports.Console()];
        filespath.forEach((element) => {
            transports.push(new winston.transports.File({
                filename: `${element.filename}.log`,
                level: element.level
            }));
        })
        return transports;
    }

    return {
        log(message, level = 5) {
            winstonLog.log(level, message);
        },
        critical(message) {
            winstonLog.log('critical', message);
        },
        error(message) {
            winstonLog.log('error', message);
        },
        warning(message) {
            winstonLog.log('warning', message);
        },
        notice(message) {
            winstonLog.log('notice', message);
        },
        info(message) {
            winstonLog.log('info', message);
        },
        debug(message) {
            winstonLog.log('debug', message);
        }
    }
}

exports.levels = levels;
