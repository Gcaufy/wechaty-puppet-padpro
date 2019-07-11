/* eslint sort-keys: 0 */
import test  from 'blue-tape'
import {
  CDNCheckMd5Request,
  CDNDownloadDataRequest,
  CDNFileMd5Exist,
  CDNUploadDataRequest,
} from '../schemas'
import {
  packCheckMd5Request,
  packDownloadRequest,
  packUploadRequest,
  unpackCheckMd5Request,
  unpackCheckMd5Response,
  unpackDownloadRequest,
  unpackDownloadResponse,
  unpackUploadRequest,
  unpackUploadResponse,
} from './cdn-utils'

test('Should be able to pack and unpack CDN Download request', async t => {
  const request: CDNDownloadDataRequest = {
    ver: 1,
    weixinnum: 2759546243,
    seq: 3,
    clientversion: 1644561945,
    clientostype: 'Windows 10',
    authkey: Buffer.from('3043020101043c303a020101020101020403eb558302032f54cd0204ad3ca17b0204873da17b02033d11fd0204b3e2e2650204f33e5b6502045c509c3f02043574358c0400', 'hex'),
    nettype: 1,
    acceptdupack: 1,
    safeproto: 1,
    filetype: 3,
    wxchattype: 0,
    fileid: '304c020100044530430201000204d4fe81c502032f54cd0204a13da17b02045c01699d041e777875706c6f61645f62696e736565393632385f313534333539363434340204010438010201000400',
    lastretcode: 0,
    ipseq: 0,
    wxmsgflag: null,
    wxautostart: 0,
    downpicformat: 1,
    largesvideo: 0,
    sourceflag: 0,
    rangestart: 0,
    rangeend: 2527,
  }

  const buf = Buffer.from('AAAAA3ZlcgAAAAExAAAACXdlaXhpbm51bQAAAAoyNzU5NTQ2MjQzAAAAA3NlcQAAAAEzAAAADWNsaWVudHZlcnNpb24AAAAKMTY0NDU2MTk0NQAAAAxjbGllbnRvc3R5cGUAAAAKV2luZG93cyAxMAAAAAdhdXRoa2V5AAAARTBDAgEBBDwwOgIBAQIBAQIEA+tVgwIDL1TNAgStPKF7AgSHPaF7AgM9Ef0CBLPi4mUCBPM+W2UCBFxQnD8CBDV0NYwEAAAAAAduZXR0eXBlAAAAATEAAAAMYWNjZXB0ZHVwYWNrAAAAATEAAAAJc2FmZXByb3RvAAAAATEAAAAIZmlsZXR5cGUAAAABMwAAAAp3eGNoYXR0eXBlAAAAATAAAAAGZmlsZWlkAAAAnDMwNGMwMjAxMDAwNDQ1MzA0MzAyMDEwMDAyMDRkNGZlODFjNTAyMDMyZjU0Y2QwMjA0YTEzZGExN2IwMjA0NWMwMTY5OWQwNDFlNzc3ODc1NzA2YzZmNjE2NDVmNjI2OTZlNzM2NTY1MzkzNjMyMzg1ZjMxMzUzNDMzMzUzOTM2MzQzNDM0MDIwNDAxMDQzODAxMDIwMTAwMDQwMAAAAAtsYXN0cmV0Y29kZQAAAAEwAAAABWlwc2VxAAAAATAAAAAJd3htc2dmbGFnAAAAAAAAAAt3eGF1dG9zdGFydAAAAAEwAAAADWRvd25waWNmb3JtYXQAAAABMQAAAAtsYXJnZXN2aWRlbwAAAAEwAAAACnNvdXJjZWZsYWcAAAABMAAAAApyYW5nZXN0YXJ0AAAAATAAAAAIcmFuZ2VlbmQAAAAEMjUyNw==', 'base64')
  const packedReq = packDownloadRequest(request)
  const unpackedReq = unpackDownloadRequest(buf)
  t.deepEqual(packedReq, buf)
  t.deepEqual(unpackedReq, request)
})

test('Should be able to pack and unpack CDN check md5 request', async t => {
  const request: CDNCheckMd5Request = {
    ver: 1,
    weixinnum: 2759546243,
    seq: 15,
    clientversion: 1644561945,
    clientostype: 'Windows 10',
    authkey: Buffer.from('3043020101043c303a020101020101020403eb558302032f54cd0204ad3ca17b0204873da17b02033d11fd0204b3e2e2650204f33e5b6502045c509c3f02043574358c0400', 'hex'),
    nettype: 1,
    acceptdupack: 1,
    filetype: 5,
    safeproto: 1,
    enablehit: 1,
    filemd5: 'd6fc6cac4dd2aa0fbc61cfa0fb6f553a',
    largesvideo: 0,
    wxchattype: 0,
    advideoflag: 0,
    touser: '@cdn_448bdb2cf6f0b91424e4967d73cdf739',
  }

  const buf = Buffer.from('AAAAA3ZlcgAAAAExAAAACXdlaXhpbm51bQAAAAoyNzU5NTQ2MjQzAAAAA3NlcQAAAAIxNQAAAA1jbGllbnR2ZXJzaW9uAAAACjE2NDQ1NjE5NDUAAAAMY2xpZW50b3N0eXBlAAAACldpbmRvd3MgMTAAAAAHYXV0aGtleQAAAEUwQwIBAQQ8MDoCAQECAQECBAPrVYMCAy9UzQIErTyhewIEhz2hewIDPRH9AgSz4uJlAgTzPltlAgRcUJw/AgQ1dDWMBAAAAAAHbmV0dHlwZQAAAAExAAAADGFjY2VwdGR1cGFjawAAAAExAAAACGZpbGV0eXBlAAAAATUAAAAJc2FmZXByb3RvAAAAATEAAAAJZW5hYmxlaGl0AAAAATEAAAAHZmlsZW1kNQAAACBkNmZjNmNhYzRkZDJhYTBmYmM2MWNmYTBmYjZmNTUzYQAAAAtsYXJnZXN2aWRlbwAAAAEwAAAACnd4Y2hhdHR5cGUAAAABMAAAAAthZHZpZGVvZmxhZwAAAAEwAAAABnRvdXNlcgAAACVAY2RuXzQ0OGJkYjJjZjZmMGI5MTQyNGU0OTY3ZDczY2RmNzM5', 'base64')
  const packedReq = packCheckMd5Request(request)
  const unpackedReq = unpackCheckMd5Request(buf)
  t.deepEqual(packedReq, buf)
  t.deepEqual(unpackedReq, request)
})

test('Should be able to pack and unpack CDN Upload request', async t => {
  const request: CDNUploadDataRequest = {
    ver: 1,
    weixinnum: 2759546243,
    seq: 12,
    clientversion: 1644561945,
    clientostype: 'Windows 10',
    authkey: Buffer.from('3043020101043c303a020101020101020403eb558302032f54cd0204ad3ca17b0204873da17b02033d11fd0204b3e2e2650204f33e5b6502045c509c3f02043574358c0400', 'hex'),
    nettype: 1,
    acceptdupack: 1,
    safeproto: 1,
    filetype: 5,
    wxchattype: 0,
    lastretcode: 0,
    ipseq: 0,
    hasthumb: 0,
    touser: '@cdn2_ddc7bbd746f4e1de3f0d2e58cee2b813',
    compresstype: 0,
    nocheckaeskey: 1,
    enablehit: 1,
    existancecheck: 0,
    apptype: 0,
    filekey: '65bf554a479bdb944fcaec9cc59e9868',
    totalsize: 352,
    rawtotalsize: 341,
    localname: '.bash_aliases',
    thumbtotalsize: 0,
    rawthumbsize: 0,
    rawthumbmd5: null,
    encthumbcrc: 0,
    largesvideo: 0,
    sourceflag: 0,
    advideoflag: 0,
    rangestart: 0,
    rangeend: 351,
    filedatamd5: '19dca0ea13ac151fdf6ee460cc545f00',
    filemd5: 'ad456403eb3cf46480d1981602fc0522',
    rawfilemd5: 'ad456403eb3cf46480d1981602fc0522',
    blockmd5: '19dca0ea13ac151fdf6ee460cc545f00',
    filedata: Buffer.from('f48865a19604931bdc7954ee027730b0c7ef1a2d0cbe59b2828662027f9546fbca537a5a2821ce2898f96c509dcc6759b8cb3cde5dd3f42c4681a444cb04102b74850fdbbc74101b9f184e23c20a2e5e0e1488e718f62f40714750b100e1bd77bdb7b7b88fe2a6a60f7cf0520f3a788f30367f835a47881295f24de603f6bf863602bf5632f1b783360c4f475abdaf3a4e93dddffab0710a77e8db9d92223ea6635a0ad766f84222f35faa9f651100582e9c81c2b1b277a10ada285c21defbca39a90b55e53f202e0011cf04f082f9cc06707ffd4497889ee525689de9f845ace24322f14799600287db02fbe0a73aed4d7b2ee05af6a009f2bbdbd4bf795e1a523c413f76e49296683b4217bceea5624a133eb5c28a5866f9294d5547e8541a620b8293b0b9ee6dcad65325d7f7141534a98300c3c3ea6c788f2d711487d1e9321025991b273489ecc5d091c83d3b4fee77225009989c360d0b7d1cd9edf598', 'hex'),
  }

  const buf = Buffer.from('AAAAA3ZlcgAAAAExAAAACXdlaXhpbm51bQAAAAoyNzU5NTQ2MjQzAAAAA3NlcQAAAAIxMgAAAA1jbGllbnR2ZXJzaW9uAAAACjE2NDQ1NjE5NDUAAAAMY2xpZW50b3N0eXBlAAAACldpbmRvd3MgMTAAAAAHYXV0aGtleQAAAEUwQwIBAQQ8MDoCAQECAQECBAPrVYMCAy9UzQIErTyhewIEhz2hewIDPRH9AgSz4uJlAgTzPltlAgRcUJw/AgQ1dDWMBAAAAAAHbmV0dHlwZQAAAAExAAAADGFjY2VwdGR1cGFjawAAAAExAAAACXNhZmVwcm90bwAAAAExAAAACGZpbGV0eXBlAAAAATUAAAAKd3hjaGF0dHlwZQAAAAEwAAAAC2xhc3RyZXRjb2RlAAAAATAAAAAFaXBzZXEAAAABMAAAAAhoYXN0aHVtYgAAAAEwAAAABnRvdXNlcgAAACZAY2RuMl9kZGM3YmJkNzQ2ZjRlMWRlM2YwZDJlNThjZWUyYjgxMwAAAAxjb21wcmVzc3R5cGUAAAABMAAAAA1ub2NoZWNrYWVza2V5AAAAATEAAAAJZW5hYmxlaGl0AAAAATEAAAAOZXhpc3RhbmNlY2hlY2sAAAABMAAAAAdhcHB0eXBlAAAAATAAAAAHZmlsZWtleQAAACA2NWJmNTU0YTQ3OWJkYjk0NGZjYWVjOWNjNTllOTg2OAAAAAl0b3RhbHNpemUAAAADMzUyAAAADHJhd3RvdGFsc2l6ZQAAAAMzNDEAAAAJbG9jYWxuYW1lAAAADS5iYXNoX2FsaWFzZXMAAAAOdGh1bWJ0b3RhbHNpemUAAAABMAAAAAxyYXd0aHVtYnNpemUAAAABMAAAAAtyYXd0aHVtYm1kNQAAAAAAAAALZW5jdGh1bWJjcmMAAAABMAAAAAtsYXJnZXN2aWRlbwAAAAEwAAAACnNvdXJjZWZsYWcAAAABMAAAAAthZHZpZGVvZmxhZwAAAAEwAAAACnJhbmdlc3RhcnQAAAABMAAAAAhyYW5nZWVuZAAAAAMzNTEAAAALZmlsZWRhdGFtZDUAAAAgMTlkY2EwZWExM2FjMTUxZmRmNmVlNDYwY2M1NDVmMDAAAAAHZmlsZW1kNQAAACBhZDQ1NjQwM2ViM2NmNDY0ODBkMTk4MTYwMmZjMDUyMgAAAApyYXdmaWxlbWQ1AAAAIGFkNDU2NDAzZWIzY2Y0NjQ4MGQxOTgxNjAyZmMwNTIyAAAACGJsb2NrbWQ1AAAAIDE5ZGNhMGVhMTNhYzE1MWZkZjZlZTQ2MGNjNTQ1ZjAwAAAACGZpbGVkYXRhAAABYPSIZaGWBJMb3HlU7gJ3MLDH7xotDL5ZsoKGYgJ/lUb7ylN6WighziiY+WxQncxnWbjLPN5d0/QsRoGkRMsEECt0hQ/bvHQQG58YTiPCCi5eDhSI5xj2L0BxR1CxAOG9d723t7iP4qamD3zwUg86eI8wNn+DWkeIEpXyTeYD9r+GNgK/VjLxt4M2DE9HWr2vOk6T3d/6sHEKd+jbnZIiPqZjWgrXZvhCIvNfqp9lEQBYLpyBwrGyd6EK2ihcId77yjmpC1XlPyAuABHPBPCC+cwGcH/9RJeInuUlaJ3p+EWs4kMi8UeZYAKH2wL74Kc67U17LuBa9qAJ8rvb1L95XhpSPEE/duSSlmg7Qhe87qViShM+tcKKWGb5KU1VR+hUGmILgpOwue5tytZTJdf3FBU0qYMAw8PqbHiPLXEUh9HpMhAlmRsnNInsxdCRyD07T+53IlAJmJw2DQt9HNnt9Zg=', 'base64')
  const packedReq = packUploadRequest(request)
  const unpackedReq = unpackUploadRequest(buf)

  t.deepEqual(packedReq, buf)
  t.deepEqual(unpackedReq, request)
})

test('Should be able to unpack CDN Download response from a buffer', async t => {
  const buf = Buffer.from('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', 'base64')

  const expectedRes = {
    'ver': 0,
    'rangestart': 0,
    'rangeend': 2527,
    'totalsize': 2528,
    'seq': 3,
    'retcode': 0,
    'substituteftype': 3,
    'rsppicformat': 1,
    'retrysec': 0,
    'isretry': 0,
    'isoverload': 0,
    'isgetcdn': 1,
    'x-ClientIp': '222.89.214.18',
    'filedata': Buffer.from('02f4c3000c070adbaae4843faf9241bcd5d6d649fd74e66b772b8e7fba77dd29e91d603a9df4b9c6b4ac9be6b10c1557680028ecee1d2266375f7f9182fc6ccf519725ed2f3f2cb57c4ec51d09ff0c20d99606d89967e98cdab362ccdf0e5a979b334d47bfc97d256fc43acd79eb1dffba5a8561f4492f47b4d8d09535f6bf3a3dad953228ac94bebfe6e8d92d98c1a7885bc32a5c8c493a481d7c88486b96111d13e1c06df279e9e9ec34f6479f0b9624b4be35541a175714362fdaeb78dd24245f33065363f7b2b664a589b9ce8869c333b0e34d20bb6fe770afd837d79e29f65142335cfc1af1b3c8f9330f4db2be3bdb4f9b7f68f21b067108ca8d44ea1a17a9bea04dd260de5b41d16824466f14c1832d91c8eef0bae07619d2c915730d6e47e692c5a474b6960d6a7a7b667e8f4f60490be8511851897ca4fd3b53055d1fd95463fbc672c28194f2ed325ee3f00c9fb8fd20918da535cf07089ff03f19183a6959fd51cbfb504bbffcd24b90b34e0ae498058f970552cdeb86219ea4f23acd8463455b5423b10becd97b8b8b0431b50ac561c4c6e3d7eedbde6dc88af4bd240b633ea21eae3a124d799a06910260d272fb856c6deddb586156a16a3aa97321d3d32fb777386804595a199d1431e1e1d0b87b426e3cb36c31cb4e70b59e6ba04e06c8ef628b3d6a8e45966dc63782ac5fd6a9bfac078826d79034f646bd10eed75eeaf237791e693f79faacee02ad9f825fd80e79c96f0f4c734ee578d4ccc52856b3799a067707b7dcf050a3ac29f6c3b29939649bd8eaa5c82902aa66d8c66200ced00552a7287dea24c73fccd0c4d335c2553e418c77d4b1b61414f48bbafc777ecd4871d409b6f5fbcafaa5df731880b59319e199d54990fabb2bad9a6515f2cc1c42bb5aeaae922fcc64f14bf6fc8697923b80de25699675e9babe63a1c60ca75f73d6795b0eb4a283d65df2390584791a04326c6cb6bc51c57b798afc78d3cb54af9b37966f213b7d64cd70f07d2f2fd2875b0306efa76a9cd62870f07d2f2fd2875b0306efa76a9cd628ac77c330330c608f24926af1bcce337b1c48225b47d99c5be5ea6cda57b0e9291ab880698c394ae3368b5300ac1e7b846a66f9d04f7b0d57d89909c5d8be8588038484378ad61d66df0501595ae479a5ffd43d511fd829d7c2d4ae308d202522c6961d8c600bdf167311c2c72cfce1f4d92f28364cbd6cc9428d7c6d8236144efb6cf22ff991431802cc195e08c483039f21c92a9706f03fa95189521a60280c2ab19d2c6e450950f380761fcbc2021758cf59a6dc97777bc0ca3c99af7829940b78d0198cde43f53ec2f35ca4167da5d48d4e86f9ddd971d14ac611d223283faf94a2385ec6e75c6d9f4e9be079b4847f507bd34c108e0d8dec16c8ff96dc202f0fd303ee4a7c388f9c20ee93df40ea1049108bc41f096a0d33f489c59d22a6782233411ccbf7ead99e5c5b25b0fc53387d637951dc25bac3268fe26a3126eca1c3d9fbcd98e969788df0fd6a621002ec17f14b17d2bfaca2543999c92fc14041f8456c31a3b2097d342e515035f3db448266d8f3bab266b3436b848da533e800f441aeea6eda7ff11783c3c62cfea56a539e937ffe9c39c323f889b58ea97bb34c46e434d09089f4cba3445d1d4e5f3880bdf85fe3dce7312dbe8bd3b3c1087637d7aa884e92a3ffb2d826141e6c3e171283a18fc28f501e37ee08b5517880c107956eeabff5a9ba9a904eb62ff94f48e4788003e451985918a06179eda2b55e3095826d8dbd07faad76fc476b4603d31dce4632051494683c94c85e6a12a91b09d673ccfef98c05e56606259759bfff4b36e210abe90e3750d93d8fc5884d4cda10abdf1c9a6526af5177681d3cddbe37757271e680effe2514087badbe1a33ddc76c81a041904913f6bb44c88020fa2ff2bfae01f01fb5b8ea982e4798c53b58ea2001ecbb01d39615a96694d8183031a644c4cf3ac93acb6fe06445c87e05d138ae68d555abd8950beb2c7cc4ef74856340c33bbd2aaa06eaef5b9818f0850e4b2f0ed41d9e2ee6987bae701626b11b26b45af561c91aef6d27006f2cc0eb55bff68cda39a4081fd7375da86794e10cbae1c477cff8cc45d4be2ffa7a78c7343223f04b4158d14ae4c1484871f922964e8c704f0c652da5e654d0fa0e0a1a562444a894a5de10c90f050ed3426348320cbe351e254ef1f3f8ef4702814fe38ee752ba55280d7683550c212c02ca8f4e82f75c49a0cae54e343384ceed372835e985c54c933cc58237dd10521792ced6c8a1c8ec4b79443f0d0616cf9b391e841c380f6a128dc4e816bdcd2977061b8ceb70d10d349564fb292f1328d410cd60d27d85c2f59f6d40122b3f9a84a2d4a23930bf89cd1382f5b4f613144c660d0a0f88683e52bbd1efe161cf4288d8d32253c41e93829746b20a80b292848af915e7ee49db298e36c2fee93f0bcddef703384d61bf5f6e5af79a34d0f095f34ba0ae70663d89f0adaee54bc9bbb8a7c972732252edc5742c9c4e5ed7bf1bae6a49bd5921dafc95f2d39a60a73ee7364fdc2979101fca0ae97f7ee4432200962202818bd2ad1b4f77a4593402fa6acc704964ceed05b303df668006711a79bc18a07582220afe8dd53506575b41546cffd87ff32fdbd8436bc7a27778763d046ec7e7723c75ec61395a83b65c99ed7c4c9b8a38a44d2c43fec37233dc6ddfbe853b45d40aaa2cf6aadb40020466cd146a9bc0189a9f3a5499fa3628d9bab0ff13efd1c177cc8325f85b65edad96e48e3c64db4892d9bb4b6485d6b903a19b1cca83f4f16f7f17bbfbc1a8760455fbd4e5b2853d294563b0bbce63a9a74574d318889b3057928aff416ad722e3ee13262be3fe758fe552176b24d3c58929912d2cff48481cd9f3fbe952caeef6e2', 'hex'),
  }

  const unpackedRes = unpackDownloadResponse(buf)

  t.deepEqual(unpackedRes, expectedRes)
})

test('Should be able to unpack CDN Check MD5 response from a buffer', async t => {
  const buf = Buffer.from('AAAAA3ZlcgAAAAEwAAAAA3NlcQAAAAIxNQAAAAlleGlzdGZsYWcAAAABMAAAAAdyZXRjb2RlAAAAATA=', 'base64')

  const expectedRes = { ver: 0, seq: 15, existflag: CDNFileMd5Exist.NON_EXIST, retcode: 0 }

  const unpackedRes = unpackCheckMd5Response(buf)

  t.deepEqual(unpackedRes, expectedRes)
})

test('Should be able to unpack CDN Upload response from a buffer', async t => {
  const buf = Buffer.from('AAAAA3ZlcgAAAAEwAAAAB2ZpbGVrZXkAAAAgNjViZjU1NGE0NzliZGI5NDRmY2FlYzljYzU5ZTk4NjgAAAAKcmFuZ2VzdGFydAAAAAEwAAAACHJhbmdlZW5kAAAAAzM1MQAAAANzZXEAAAACMTIAAAAHcmV0Y29kZQAAAAEwAAAACWV4aXN0ZmxhZwAAAAEwAAAABmZpbGVpZAAAAKAzMDRlMDIwMTAwMDQ0NzMwNDUwMjAxMDAwMjA0YTQ3YjU1ODMwMjAzMmY1NGNkMDIwNGFkM2NhMTdiMDIwNDVjMDE4NGNlMDQyMDM2MzU2MjY2MzUzNTM0NjEzNDM3Mzk2MjY0NjIzOTM0MzQ2NjYzNjE2NTYzMzk2MzYzMzUzOTY1MzkzODM2MzgwMjA0MDEwNDAwMDUwMjAxMDAwNDAwAAAACHJldHJ5c2VjAAAAATAAAAAHaXNyZXRyeQAAAAEwAAAACmlzb3ZlcmxvYWQAAAABMAAAAAhpc2dldGNkbgAAAAExAAAACngtQ2xpZW50SXAAAAANMjIyLjg5LjIxNC4xOA==', 'base64')
  const expectedRes = {
    'ver': 0,
    'filekey': '65bf554a479bdb944fcaec9cc59e9868',
    'rangestart': 0,
    'rangeend': 351,
    'seq': 12,
    'retcode': 0,
    'existflag': 0,
    'fileid': '304e020100044730450201000204a47b558302032f54cd0204ad3ca17b02045c0184ce042036356266353534613437396264623934346663616563396363353965393836380204010400050201000400',
    'retrysec': 0,
    'isretry': 0,
    'isoverload': 0,
    'isgetcdn': 1,
    'x-ClientIp': '222.89.214.18',
  }

  const unpackedRes = unpackUploadResponse(buf)

  t.deepEqual(unpackedRes, expectedRes)
})
