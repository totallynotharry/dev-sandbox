self.__uv$config = {
    prefix: '/uv/service/',
    // Public bare server — replace with your own for best reliability
    // Options if this one goes down: https://github.com/tomphttp/bare-server-node
    bare: 'https://uv.holyubofficial.net/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
 
