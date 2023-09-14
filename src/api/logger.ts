import debug from 'debug';

// FIXME: Modify your app name in logger settings
const settings = {
    _namespace: process.env.NEXT_PUBLIC_ENV || 'nextjs-boilerplate',
    _appName: 'nextjs-boilerplate:',
};

export type LoggerContent = string | number | Record<string, unknown>;

const Logger = {
    info: (content: LoggerContent, name = settings._namespace) => {
        const namespace = `${settings._appName}:${name}`;
        const message = debug(namespace);
        message(content);
    },
};

Object.freeze(Logger);

export default Logger;
