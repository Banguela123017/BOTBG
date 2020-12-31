/ *
 * JANGAN UBAH-UBAH INFO !!!
 * "JANGAN MODAL NAMA DOANG BRO !!!"
 * SCRIPT POR ARIS187 ID
 * JANGAN MODAL NAMA DOANG BOSQ
 * SCRIPT INI BOSQ de HARGAILAH YG MEMBUAT
 * JANGAN UBAH-UBAH INFO !!!
 * ARIS187 ID
 * BOLEH UBAH TAPI KECUALI INFO !!!
 * /
 const qrcode = require ("qrcode-terminal")
 momento const = requer ("fuso horário do momento")
 const fs = require ("fs")

 const time = moment (). tz ('Asia / Jakarta'). format ("HH: mm: ss")
 const arrayBulan = ['Januari', 'Februari', 'Maret', 'abril', 'Mei', 'Juni', 'Juli', 'Agustus', 'setembro', 'outubro', 'novembro', 'Desember  ']

 const bulan = arrayBulan [moment (). format ('MM') - 1]

 const config = {
     A187: '📍BANGUELA-BOT📍',
     Instagram: 'OFF',
     nomer: 'wa.me/9887024029',
     aktif: '24 JAM ',
     youtube: 'https://youtube.com/channel/UC7J8_M1qYrpRwt-9cQeDAiA',
     whatsapp: 'https://chat.whatsapp.com/KTlC0MXi3WJChdQeps5flt',
     tanggal: `TANGGAL: $ {moment (). format ('DD')} $ {bulan} $ {moment (). format ('YYYY')}`,
     waktu: hora
 }

 const {A187, tanggal, waktu, instagram, whatsapp, youtube, nomer, aktif, ontime} = config

 const
 {
    WAConnection,
    Tipo de mensagem,
    Presença,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
 } = require ("@ adiwajshing / baileys")

 const {
     Socorro,
     menu1,
     menu2,
     menu3,
     informação,
     doar,
     alay,
     artinama,
     corona,
     kbbi,
     downloadImage,
     igStalk,
     jodoh,
     jsholat,
     lirik,
     nulis,
     readTextInImage,
     pantun,
     citações,
     searchYoutube,
     surata,
     tiktokdl,
     tweetdl,
     wiki,
     ytdl,
     bucin,
     cersex,
     cerpen,
     puisi1,
     puisi2,
     resep,
     namaninja,
     pouco,
     nekonime,
     cektanggal,
     acorde,
     zodiak,
     fb,
     simi,
     wikien,
     spamsms,
     spamcall,
     spamgmail,
     covidcountry,
     infoanime,
     gay,
     ytmp3,
     ssweb,
     infogempa,
     indohot,
     loli,
     ttp,
     mapa,
     waifu
 } = requer ('./ lib')

 const {animPict, cewePict, cowoPict} = require ('./ lib / pict')

 const {exec} = requer ("child_process")

 const client = new WAConnection ()

 client.on ('qr', qr => {
    qrcode.generate (qr, {small: true})
    console.log (`[$ {time}] O código QR está pronto, inscreva-se Aris187 ID`)
 })

 client.on ('credentials-updated', () => {
    const authInfo = client.base64EncodedAuthInfo ()
    console.log (`credenciais atualizadas!`)

    fs.writeFileSync ('./ session.json', JSON.stringify (authInfo, null, '\ t'))
 })

 fs.existsSync ('./ session.json') && client.loadAuthInfo ('./ session.json')

 client.connect ();

 // client.on ('usuário-presença-atualização', json => console.log (json.id + 'presença é =>' + json.type)) ||  console.log (`$ {time}: Bot por ig: @ aditiaalfians`)

 client.on ('message-status-update', json => {
    const participant = json.participant?  '(' + json.participant + ')': ''
    console.log (`[$ {time}] => bot por ig: @_ sadboy.ig`)
 })

 client.on ('mensagem-nova', assíncrono (m) => {
    const messageContent = m.message
    const text = m.message.conversation
    const messageType = Object.keys (messageContent) [0]

    const re = /[\#\!\@\/\?\%\$\.]/

    valor const = text.split ('') .splice (1) .join ('')

    let id = m.key.remoteJid
    let imageMessage = m.message.imageMessage

    const prefix = messageType === 'imageMessage'?  imageMessage.caption.split ('') [0] .split (re) [1]: text.split ('') [0] .split (re) [1] // prefixo múltiplo

    console.log (`[$ {time}] => Nomeador: [$ {id.split (" @ s.whatsapp.net ") [0]}] => $ {text}`);

    switch (prefixo) {
        case 'help':
            client.sendMessage (id, help.help (id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
            pausa
        case 'menu1':
            client.sendMessage (id, menu1.menu1 (id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
            pausa
        case 'menu2':
            client.sendMessage (id, menu2.menu2 (id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
            pausa
        case 'menu3':
            client.sendMessage (id, menu3.menu3 (id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
            pausa
       caso 'doar':
            client.sendMessage (id, donate.donate (id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
            pausa
       caso 'info':
            client.sendMessage (id, info.info (id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
            pausa
        case 'nulis':
            nulis (valor)
                .então (dados => {
                    client.sendMessage (id, '[ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, data, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'dizer':
            esperar client.sendMessage (id, value, MessageType.text)
            pausa
        case 'ytmp3':
            ytdl ('mp3', valor)
                .então (dados => {
                    const {judul, tamanho, hasil: link} = dados
                    let hasil = `OLA AQUI ESTA O LINK DE BAIXAR DA MSC \ nCLIQUE NO LINK ABAIXO: \ nMUSICA: $ {judul} \ n \ nTamanho Do áudio: $ {size} \ n \ nLink: $ {link}`
                    client.sendMessage (id, '[ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'ytmp4':
            ytdl ('mp4', valor)
                .então (dados => {
                    const {judul, tamanho, hasil: link} = dados
                    let hasil = `OLA AQUI ESTA O LINK DE BAIXAR DA MSC \ nCLIQUE NO LINK ABAIXO: \ nMUSICA: $ {judul} \ n \ nTamanho Do áudio: $ {size} \ n \ nLink: $ {link}`
                    client.sendMessage (id, '[ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'twt':
            tweetdl (valor)
                .então (dados => {
                     const {size, hasil: link} = data
                     let hasil = `✄1�71 ￄ 1�77 Berhasil!  silahkan klik link di bawah untuk mendownload hasilnya! \ nKlik link dibawah🗡️ \ n \ nTamanho: $ {size} \ n \ nLink: $ {link} `
                     client.sendMessage (id, '[ESPERE UM POUCO ...', MessageType.text)
                     client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'tiktok':
            tiktokdl (valor)
                .então (dados => {
                     const {url, nama, durasi, deskripsi} = dados
                     let hasil = `✄1�71 ￄ 1/77 Sucesso !!!  Clique no link abaixo para baixar os resultados!  \ nClique no link abaixo🗡️ \ n \ nTítulo: $ {deskripsi} \ n \ nDurasi: $ {durasi} \ n \ nNome: $ {nama} \ n \ nUrl: $ {url} `;
                     client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        caso 'wiki':
            wiki (valor)
                .então (dados => {
                     const {hasil: res} = dados
                     deixe hasil = `📝De acordo com Wikipedia: \ n \ n $ {res}`
                     client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'sholat':
            jsholat (valor)
                .então (dados => {
                    const {Imsyak, Subuh, Dzuhur, Ashar, Maghrib, Isya, Dhuha} = dados
                    vamos hasil = `Momentos de oração em * $ {value} * hoje é \ n \ n⚡Imsak: $ {Imsyak} \ n⚡Subuh: $ {Subuh} WIB \ n⚡Dzuhur: $ {Dzuhur} WIB \ n⚡  Asr: $ {Ashar} WIB \ n⚡Maghrib: $ {Maghrib} \ n⚡Isya: $ {Isya} WIB \ n⚡Tengah malam: $ {Dhuha} WIB`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'quran':
            surata ()
                .então (dados => {
                    const re = /{(.*?)}/gi
                    const {acak, surat} = dados

                    const keterangan = acak.id.ayat.replace (re, '')
                    const arText = acak.ar.teks
                    const idText = acak.id.teks
                    const surah = surat.nama

                    let hasil = `[$ {keterangan}] $ {arText} \ n \ n $ {idText} (QS. $ {surah}, Ayat $ {keterangan})`;
                    client.sendMessage (id, hasil, MessageType.text);
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'pantun':
            pantun ()
                .então (dados => {
                    client.sendMessage (id, data, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'covid':
            corona ()
                .então (dados => {
                    const {meninggal, sembuh, positif} = dados
                    let hasil = `📌ÚLTIMOS DADOS DO DISTRITO COVID-19 DA INDONÉSIA \ n \ n📍Positivo ==> $ {positif} \ n📍Curado ==> $ {sembuh} \ n📍Morreu ==> $ {meninggal}`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        caso 'aspas':
            citações()
                .então (dados => {
                    const {autor, citações} = dados
                    deixe hasil = `_ $ {aspas} _ \ n \ n ~ $ {autor}`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'nama':
            artinama (valor)
                .então (dados => {
                    const {resultado: arti} = dados
                    deixe hasil = `\ nArti nama mu adalah \ n \ n *********************************** \ n  \ n _ $ {value} _ $ {arti} \ n \ n *********************************  * `
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'pasangan':
            jodoh (valor)
                .então (dados => {
                    const {positif, negatif} = dados
                    const nama = value.split (/ [\ & \ - \ / \ +] /)
                    deixe hasil = `\ nKecocokan jodoh \ n \ n ************************************ \ n \  nPasangan 1: * $ {nama [0] .trim ()} * \ nPasangan 2: * $ {nama [1] .trim ()} * \ n \ nsisi positif: $ {positif} \ nsisi negatif: $ {negatif  } \ n \ n ************************************ `
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'pict':
            switch (valor) {
                case 'cewek':
                    cewePict ()
                        .então (buffer => {
                            client.sendMessage (id, '[ESPERE UM POUCO ...', MessageType.text)
                            client.sendMessage (id, buffer, MessageType.image)
                        })
                        .catch (err => {
                            console.log (err)
                        })
                    pausa
                case 'cowok':
                    cowoPict ()
                        .então (buffer => {
                            client.sendMessage (id, '[ESPERE UM POUCO ...', MessageType.text)
                            client.sendMessage (id, buffer, MessageType.image)
                        })
                        .catch (err => {
                            console.log (err)
                        })
                    pausa
                padrão:
                    client.sendMessage (id, 'ulangi dengan! pict cewek / cowok \ n \ nMisal:! pict cowok', MessageType.text)
                    pausa
            }
            pausa
        caso 'animepict':
            animPict ()
                .então (buffer => {
                    client.sendMessage (id, '[ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'lirik':
            lirik (valor)
                .então (dados => {
                    const {hasil: lirik} = dados
                    let hasil = `📍Letra da música📍 * $ {value} * \ n \ n \ n $ {lirik}`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
    case 'fb':
            fb (valor)
                .então (dados => {
                    const {resultHD, resultSD} = dados
                    let hasil = `Escolha uma resolução querida😙 \ n \ n \ n HD $ {resultHD} \ n \ n \ n SD $ {resultSD}`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'alay':
            alay (valor)
                .então (dados => {
                    const {hasil: alay} = dados
                    client.sendMessage (id, alay, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        estojo 'adesivo':
            const image = await client.downloadAndSaveMediaMessage (m)
            exec ('cwebp -q 50' + imagem + '-o temp /' + hora + '.webp', (erro, stdout, stderr) => {
                let result = fs.readFileSync ('temp /' + hora + '.webp')
                client.sendMessage (id, resultado, MessageType.sticker)
            })
            pausa
        case 'ocr':
            const media = await client.downloadAndSaveMediaMessage (m)
            readTextInImage (mídia)
                .então (dados => {
                    client.sendMessage (id, `* Ola amigo o texto da imagem esta aqui. * \ n \ nResultado :: \ n \ n $ {data}`, MessageType.text);
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        caso 'igstalk':
            igStalk (valor)
                .então (dados => {
                    const {Username, Jumlah_Followers, Jumlah_Following, Name, Jumlah_Post} = data
                    client.sendMessage (id, '[WAIT] Stalking ... ⏄1�71 ￄ 1�77', MessageType.text)
                    let hasil = `✨Bio do Instagram _ $ {value} _ \ n \ n 🧶 * Nome do usuário *: $ {Username} _ \ n 🌀 * Nome *: _ $ {Name} _ \ n 🌟 * Número de Seguidores  *: _ $ {Jumlah_Followers} _ \ n 🌠 * Total_Following *: _ $ {Jumlah_Following} _ \ n ⭄1�71 ￄ 1�77 * Jumlah_Post *: _ $ {Jumlah_Post} _ `
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    client.sendMessage (id, err, MessageType.text)
                })
            pausa
            case 'cerpen':
            cerpen ()
                .então (dados => {
                    const {resultado} = dados
                    deixe hasil = `_ $ {result} _`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
 case 'puisi1':
            puisi1 ()
                .então (dados => {
                    const {resultado} = dados
                    deixe hasil = `_ $ {result} _`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
 case 'puisi2':
            puisi2 ()
                .então (dados => {
                    const {resultado} = dados
                    deixe hasil = `_ $ {result} _`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
  case 'infogempa':
            infogempa ()
                .então (dados => {
                    const {lokasi, kedalaman, koordinat, magnitude, waktu} = dados
                    let hasil = `* INFO GEMPA * \ n \ * Lokasi *: _ $ {lokasi} _ \ n * Kedalaman *: _ $ {kedalaman} _ \ n * Koordinat *: _ $ {koordinat} _ \ n * Magnitude *  : _ $ {magnitude} _ \ n * Waktu *: _ $ {waktu} _`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
    case 'chord':
            acorde (valor)
                .então (dados => {
                    const {resultado} = dados
                    let hasil = `Aqui estão os acordes da música * $ {value} * querida ♥ ️ \ n \ n _ $ {result} _`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
    caso 'kbbi':
            kbbi (valor)
                .então (dados => {
                    const {resultado} = dados
                    let hasil = `* $ {value} * menurut KBBI ️ \ n \ n _ $ {result} _`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
           
            case 'zodiak':
  zodiak (valor)
                .então (dados => {
                    const {lahir, ultah, usia, zodiak} = dados
                    let hasil = `* Lahir *: _ $ {lahir} _ n \ n * Aniversário *: _ $ {ultah} _ \ n * Usia *: _ $ {usia} _: \ n * Zodíaco *: _ $ {zodiak  } _ `
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
   case 'simi':
             simi (valor)
                .então (dados => {
                    const {resultado} = dados
                    deixe hasil = `$ {result}`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
  case 'wikien':
            wikien (valor)
                .então (dados => {
                    const {resultado} = dados
                    deixe hasil = `* ♻️De acordo com a Wikipedia🗿: * \ n \ n _ $ {resultado} _`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
 caso 'spamgmail':
            spamgmail ()
                .então (dados => {
                    const {logs} = dados
                    deixe hasil = `_ $ {logs} _`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
  caso 'spamcall':
            spamcall ()
                .então (dados => {
                    const {logs} = dados
                    deixe hasil = `_ $ {logs} _`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
   caso 'spamsms':
            spamsms ()
                .então (dados => {
                    const {logs} = dados
                    deixe hasil = `_ $ {logs} _`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
  case 'covidcountry':
            covidcountry (valor)
                .então (dados => {
                    const {país, ativo, casosPerOneMillion, crítico, mortesPerOneMillion, recuperado, testPerOneMillion, todayCases, todayDeath, totalCases, totalTest} = dados
                    let hasil = `* Negara *: _ $ {country} _ \ n \ n * Ativo *: _ $ {ativo} _ \ n * CasesPerOneMillion *: _ $ {casesPerOneMillion} _ \ n * Crítico *: $ {crítico}  \ n * DeathsPerOneMillion *: _ $ {mortesPerOneMillion} _ \ n * Recuperado *: _ $ {recovery} _ \ n * TestPerOneMillion *: _ $ {testPerOneMillion} _ \ n * TodayCases *: _ $ {todayCases} _ \ n  * TodayDeath: _ $ {todayDeath} \ n * TotalCases *: _ $ {totalCases} _ \ n * TotalTest *: _ $ {totalTest} _ `
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
   case 'infoanime':
            infoanime (valor)
                .então (dados => {
                    const {resultado} = dados
                    let hasil = `* INFO ANIME $ {value}: * \ n \ n _ $ {result} _`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
 caso 'gay':
            gay ()
                .então (dados => {
                    const {desc, persen} = dados
                    let hasil = `* $ {desc} \ n \ n * Persen Gay Lo Su !!! * _ $ {persen} _`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
   case 'indohot':
            indohot ()
                .então (dados => {
                    const {judul, gênero, durasi, url} = dados
                    let hasil = `Arrependimento GOBLOK😳 * \ n \ n * Judul * _ $ {judul} _ \ n \ n * Status * _ $ {genre} _ \ n \ n * Durasi * _ $ {durasi} _ \ n \  n * Link Bosq * _ $ {url} _ `
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
 case 'filmanime':
            filmanime (valor)
                .então (dados => {
                    const {title, rating, sinopis, video} = data
                    let hasil = `* Filme Anime $ {value}: * \ n \ n * Judul * _ $ {title} _ \ n \ n * Avaliação * _ $ {rating} _ \ n \ n * Info * _ $ {sinopse  } _ \ n \ n * Link de vídeo * _ $ {video} _ `
                    client.sendMessage (id, hasil, MessageType.txext)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
  case 'resep':
            resep (valor)
                .então (dados => {
                    const {título, usuário, dataPublicação, dificuldade, horários, serviço, bahan, tutor} = dados
                    let hasil = `* Judul: * $ {title} \ n * Penulis: * $ {user} \ n * Rilis: * $ {datePublished} \ n * Level: * $ {dificuldade} \ n * Waktu: * $ {  times} \ n * Porsi: * $ {servings} \ n \ n * Bahan-bahan: * \ n $ {ingrediente} \ n \ n * Passo a passo: * \ n $ {step} `
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
   case 'namaninja':
            namaninja (valor)
                .então (dados => {
                    const {ninja} = dados
                    vamos hasil = `Nama Ninja * $ {value} * 💡: \ n \ n _ $ {ninja} _`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
   case 'cektanggal':
            cektanggal (valor)
                .então (dados => {
                    const {tanggal, keterangan} = dados
                    let hasil = `Menurut tanggal $ {value} adalah \ n \ n * Tanggal *: _ $ {tanggal} _ \ n * Keterangan *: _ $ {keterangan} _`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
    case 'bitly':
            pouco (valor)
                .então (dados => {
                    const {resultado} = dados
                    vamos hasil = `Aqui maninha ja terminou☣️ :) \ n \ n $ {resultado}`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
      caso 'cersex':
            cersex ()
                .então (dados => {
                    const {resultado} = dados
                    deixe hasil = `CERSEX \ n \ n $ {resultado}`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
     case 'bucin':
            bucin ()
                .então (dados => {
                    const {desc} = dados
                    deixe hasil = `_ $ {desc} _`
                    client.sendMessage (id, hasil, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
            case 'map':
            mapa()
                .então (buffer => {
                    client.sendMessage (id, '[ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
            case 'waifu':
            waifu ()
                .então (buffer => {
                    client.sendMessage (id, '[ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
       case 'loli':
            loli ()
                .então (buffer => {
                    client.sendMessage (id, '[ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
            case 'ssweb':
            ssweb ()
                .então (buffer => {
                    client.sendMessage (id, '[ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
      case 'cooltext':
            cooltext ()
                .então (buffer => {
                    client.sendMessage (id, '[ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
            case 'ttp':
            ttp ()
                .então (buffer => {
                    client.sendMessage (id, '[ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
            case 'nekonime':
            nekonime ()
                .então (buffer => {
                    client.sendMessage (id, '[ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
            case 'ytmp3':
            mp3 ()
                .então (buffer => {
                    client.sendMessage (id, '[ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
           case 'criador':
             client.sendContact (de, '6285722553839@c.us')
             pausa
       case 'tts':
             if (args.length === 1) return client.reply (from, 'Kirim perintah *! tts [id, en, jp, ar] [teks] *, contoh *! tts id halo semua *')
             const ttsId = require ('node-gtts') ('id')
             const ttsEn = require ('node-gtts') ('en')
 const ttsJp = require ('node-gtts') ('ja')
             const ttsAr = require ('node-gtts') ('ar')
             const dataText = body.slice (8)
             if (dataText === '') retorna client.reply (from, 'Baka?', id)
             if (dataText.length> 500) retorna client.reply (from, 'Teks terlalu panjang!', id)
             var dataBhs = body.slice (5, 7)
 if (dataBhs == 'id') {
                 ttsId.save ('./ media / tts / resId.mp3', dataText, function () {
                     client.sendPtt (de, './media/tts/resId.mp3', id)
                 })
             } else if (dataBhs == 'en') {
                 ttsEn.save ('./ media / tts / resEn.mp3', dataText, function () {
                     client.sendPtt (de, './media/tts/resEn.mp3', id)
                 })
             } else if (dataBhs == 'jp') {
                 ttsJp.save ('./ media / tts / resJp.mp3', dataText, function () {
                     client.sendPtt (de, './media/tts/resJp.mp3', id)
                 })
 } else if (dataBhs == 'ar') {
                 ttsAr.save ('./ media / tts / resAr.mp3', dataText, function () {
                     client.sendPtt (de, './media/tts/resAr.mp3', id)
                 })
             } outro {
                 client.reply (from, 'Masukkan data bahasa: [id] untuk indonesia, [en] untuk inggris, [jp] untuk jepang, dan [ar] untuk arab', id)
             }
             pausa
       case 'stickergif':
             if (isMedia) {
                 if (mimetype === 'video / mp4' && mensagem.duração <10 || mimetype === 'imagem / gif' && mensagem.duração <10) {
                     const mediaData = await decryptMedia (mensagem, uaOverride)
                     client.reply (from, '[WAIT] Sedang di proses⏄1�71 ￄ 1�77 silahkan tunggu ± 1 min!', id)
                     const filename = `./media/aswu. $ {mimetype.split ('/') [1]}`
                     esperar fs.writeFileSync (nome do arquivo, mediaData)
                     await exec (`gify $ {filename} ./media/output.gif --fps = 30 --scale = 240: 240`, função assíncrona (erro, stdout, stderr) {
                         const gif = await fs.readFileSync ('./ media / output.gif', {encoding: "base64"})
                         esperar client.sendImageAsSticker (de, `data: image / gif; base64, $ {gif.toString ('base64')}`)
                     })
                 } outro (
                     client.reply (from, '[❗] Kirim video dengan caption *! stickerGif * max 10 sec!', id)
                 )
             }
             pausa
      estojo 'adesivo':
             if (isMedia && type === 'imagem') {
                 const mediaData = await decryptMedia (mensagem, uaOverride)
                 const imageBase64 = `data: $ {mimetype}; base64, $ {mediaData.toString ('base64')}`
                 esperar client.sendImageAsSticker (de, imageBase64)
             } else if (quotedMsg && quotedMsg.type == 'image') {
                 const mediaData = await decryptMedia (quotedMsg, uaOverride)
                 const imageBase64 = `data: $ {quotedMsg.mimetype}; base64, $ {mediaData.toString ('base64')}`
                 esperar client.sendImageAsSticker (de, imageBase64)
             } else if (args.length === 2) {
                 url const = args [1]
                 if (url.match (isUrl)) {
                     esperar client.sendStickerfromUrl (de, url, {método: 'get'})
                         .catch (err => console.log ('Exceção detectada:', err))
                 } outro {
                     client.reply (from, mess.error.Iv, id)
                 }
             } outro {
                     client.reply (from, mess.error.St, id)
             }
             pausa
        padrão:
            pausa
    }
 })
