const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

const { getMoney } = require("./lib/server/saldo");
let setting = JSON.parse(fs.readFileSync('./config.json'))
let hitbot = JSON.parse(fs.readFileSync('./database/dashboard/userhit.json'));
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/deposit/saldo.json'));

exports.menuall = (sender, prefix, pushname, ucapanWaktu, tanggal, jam, isOwner) => {
return `*OTHERS*
 • bot
 • wame

*MAIN MENU*
 • ${prefix}id
 • ${prefix}simi
 • ${prefix}rules
 • ${prefix}game
 • ${prefix}listgc
 • ${prefix}listpc
 • ${prefix}owner
 • ${prefix}server
 • ${prefix}cekuser
 • ${prefix}runtime
 • ${prefix}dashboard

*STORE MENU*
 • ${prefix}list
 • ${prefix}addlist
 • ${prefix}dellist
 • ${prefix}update
 • ${prefix}tambah
 • ${prefix}kurang
 • ${prefix}kali
 • ${prefix}bagi

*PROSES/DONE*
 • proses < reply chat >
 • done < reply chat >
 • ${prefix}setproses
 • ${prefix}changeproses
 • ${prefix}delsetproses
 • ${prefix}setdone
 • ${prefix}changedone
 • ${prefix}delsetdone

*RESPON/MESSAGE*
 • ${prefix}delrespon
 • ${prefix}addrespon
 • ${prefix}setrespon
 • ${prefix}listrespon

*SET WELCOME/LEFT*
 • ${prefix}getleft
 • ${prefix}setleft
 • ${prefix}delleft
 • ${prefix}changeleft
 • ${prefix}setwelcome
 • ${prefix}delwelcome
 • ${prefix}getwelcome
 • ${prefix}changewelcome

*CEK USERNAME*
 • ${prefix}nickff
 • ${prefix}nickml
 • ${prefix}nicksupersus

*GROUP SETTING*
 • ${prefix}left on
 • ${prefix}left off
 • ${prefix}antilink on
 • ${prefix}antilink off
 • ${prefix}antiwame on
 • ${prefix}antiwame off
 • ${prefix}welcome on
 • ${prefix}welcome off

*GROUP MENU*
 • ${prefix}add
 • ${prefix}kick
 • ${prefix}linkgc
 • ${prefix}infogrup
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}hidetag
 • ${prefix}tagall
 • ${prefix}open
 • ${prefix}close
 • ${prefix}setppgc
 • ${prefix}setppgc 'panjang'
 • ${prefix}setnamegc
 • ${prefix}setdesc
 • ${prefix}revoke
 • ${prefix}setclose
 • ${prefix}setopen
 • ${prefix}delclose
 • ${prefix}delopen
 • ${prefix}getopen
 • ${prefix}getclose

*SALDO USER*
 • ${prefix}ceksaldo <nomor>
 • ${prefix}tarik <jumlah|nomor>
 • ${prefix}kirim <nominal|nomor>

*OWNERS MENU*
 • ${prefix}bc
 • ${prefix}ads
 • ${prefix}join
 • ${prefix}left
 • ${prefix}self
 • ${prefix}public
 • ${prefix}sendsesi
 • ${prefix}creategc
 • ${prefix}setppbot
 • ${prefix}setppbot 'panjang'
 • ${prefix}broadcast

*RESTART DATABASE*
 • ${prefix}resetall
 • ${prefix}resetlist
 • ${prefix}resethit
 • ${prefix}resetgame
 • ${prefix}resetuser
 • ${prefix}resetsaldo

*DEPOSIT/TOPUP*
 • ${prefix}topup
 • ${prefix}saldo
 • ${prefix}topsaldo
 • ${prefix}deposit
 • ${prefix}komplain

*RANDOM ASUPAN*
 • ${prefix}rika
 • ${prefix}bocil
 • ${prefix}ghea
 • ${prefix}hijab
 • ${prefix}santuy

*RANDOM MENU*
 • ${prefix}loli
 • ${prefix}dare
 • ${prefix}bucin
 • ${prefix}truth
 • ${prefix}meme
 • ${prefix}couple
 • ${prefix}jokes
 • ${prefix}quotes
 • ${prefix}cecan
 • ${prefix}cogan
 • ${prefix}anime

*DOWNLOAD MENU*
 • ${prefix}play
 • ${prefix}twitter
 • ${prefix}tiktok
 • ${prefix}tikporn
 • ${prefix}y2mate
 • ${prefix}ytmp3
 • ${prefix}ytmp4
 • ${prefix}ytshorts
 • ${prefix}mediafire
 • ${prefix}facebook

*CONVERT STICKER*
 • ${prefix}sticker <reply image>
 • ${prefix}toimg <reply sticker>
 • ${prefix}toimage <reply sticker>
 • ${prefix}tovid <reply sticker gif>
 • ${prefix}tovideo <reply sticker gif>
 
*ISLAMIC MENU*
 • ${prefix}hadits
 • ${prefix}alquran
 • ${prefix}ayatkursi
 • ${prefix}renungan
 • ${prefix}doaharian
 • ${prefix}kisahnabi
 • ${prefix}tafsirsurah
 • ${prefix}asmaulhusna
 • ${prefix}bacaansholat

*GAMES MENU*
 • ${prefix}judi
 • ${prefix}sell
 • ${prefix}claim
 • ${prefix}myexp
 • ${prefix}myuang
 • ${prefix}mymedali
 • ${prefix}myenergi
 • ${prefix}mykarakter
 • ${prefix}myuang
 • ${prefix}mymedali
 • ${prefix}buykarakter
 • ${prefix}buyenergi
 • ${prefix}theworld
 • ${prefix}mykarakter
 • ${prefix}susunkata
 • ${prefix}caklontong
 • ${prefix}tebakkata
 • ${prefix}siapakahaku
 • ${prefix}tebaklirik
 • ${prefix}tekateki
 • ${prefix}tebakkalimat
 • ${prefix}tebakgambar
 • ${prefix}tebaktebakan
 • ${prefix}tebakgame
 
*THANKS TO*
_> Wrtg Botz_
`
}