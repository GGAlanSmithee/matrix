export const contractDetails = {
  controlOref: {
    txHash: "70166bfe55c1c5001982f45794abb44254bb81cfc71eba7e3636b6fd05cecfa9",
    outputIndex: 1,
  },
  berryPolicyId: "b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f",
  payeeAddress:
    "addr1q8c0de89nt8sukm52avpzem04ua0ucf0fn4m7jylelvazh6hcq9dmd8wqc9wlfyune7wxd5w65hfftxhnl704fsnwsxqsfmlmg",
  paymentAmount: 1300000000n,
  mintStart: 1667488718827,
  royaltyOref: {
    txHash: "dc2a273465fc362edb073efb0d079fc0b7b513597fccc3c49c3522b0d6505c97",
    outputIndex: 2,
  },
  controlOwner: "d52e11f3e48436dd42dbec6d88c239732e503b8b7a32af58e5f87625",
  txValidFromThreshold: 100000,
  txValidToThreshold: 2000000,
  referenceScriptsTxHash:
    "6045d4d747deac057e677f0bee05a3413a4f0c0d4188de6fa536aa75d4cdb717",
};

// We need to to this because of a subtle bug in blockfrost
export const refScript1 =
  "d818590efe8202590ef9590ef601000033323322323232332232323233223232323233223232323232323232323232323232323232323232323232323322323232323232323223222323223223232533533322232323232325335008133014500550122153350081330413301550065013330413303900148008c8ccd5cd19b880014800011010cc8c8d400488ccc074010008004cd54100d5401088008d5401088004c05d401854cd4cc0e400520001330413232333553037120013504650422350012233355303a120013504950452350012233350012330424800000488cc10c0080048cc10800520000013301c00200130193550032200130185004330413302035500522002375c02466082660406464666e30008cdc09b8d001002001355006220013302248021200c355335303a301850041622135002222533500413504b002221620013303935533535500222002162135047001200148008410854cd54cd4c0c801484d400488d40048888d403088d4008888888888888ccd54c0bc4800488d400888894cd4d406088d401888c8cd40148cd401094cd4ccd5cd19b8f00200106306215003106220622335004206225335333573466e3c00800418c1885400c418854cd400c854cd400884cd40088cd40088cd40088cd40088cc10c00800481948cd400881948cc10c008004888194888cd401081948894cd4ccd5cd19b8700600306806715335333573466e1c0140081a019c4cc178010004419c419c418054cd40048418041804cd4158018014401541440284c98c80c0cd5ce2481024c660003016221533500115335323232323333333574800846666ae68cdc3a8012400446666aae7d4010940f88cccd55cf9aba250052533532333333357480024a0824a0824a08246a0846eb4008941040ecd5d0a803109a82098280008a81f9281f81c81c11999ab9a3370ea006900011999aab9f50052350400502503f0392503e0370362503c2503c2503c2503c036135573aa00426aae7940044dd50009aa999a9a80111110010b109a82380090b10009099aa820000980b8018b110b0a99a981b980aa8008b1109a801111299a802099aa820801801110b09809191a800910009aa99a9818001909a8218008b10008a99a981a980928008b1109a801111299a8020b110a99a800899aa820802802110b09a800910011999ab9a3370ea00c90011181f9bad357426aae7940208cccd5cd19b8750074800081048c98c80accd5ce0160158148141999ab9a3370ea0089001109100111999ab9a3370ea00a9000109100091931901599ab9c02c02b0290283333573466e1cd55cea80124000466442466002006004646464646464646464646464646666ae68cdc39aab9d500c480008cccccccccccc88888888888848cccccccccccc00403403002c02802402001c01801401000c008cd40a40a8d5d0a80619a8148151aba1500b33502902b35742a014666aa05aeb940b0d5d0a804999aa816bae502c35742a01066a0520646ae85401cccd540b40cdd69aba150063232323333573466e1cd55cea801240004664424660020060046464646666ae68cdc39aab9d5002480008cc8848cc00400c008cd40f5d69aba15002303e357426ae8940088c98c8100cd5ce02082001f09aab9e5001137540026ae854008c8c8c8cccd5cd19b8735573aa004900011991091980080180119a81ebad35742a004607c6ae84d5d1280111931902019ab9c04104003e135573ca00226ea8004d5d09aba2500223263203c33573807a07807426aae7940044dd50009aba1500533502975c6ae854010ccd540b40bc8004d5d0a801999aa816bae200135742a00460626ae84d5d1280111931901c19ab9c039038036135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d55cf280089baa00135742a00460426ae84d5d1280111931901519ab9c02b02a028102913263202933573892010350543500029135573ca00226ea80044d55ce9baa001135573aa00226ea80044dd7000911a801111111111111299a999aa981709000a8179299a999ab9a3371e01c00207a07826a0640022a0620084207a207646a002444400646a00244444444444401046466aa60122400246a0024466aa05800466aa60182400246a0024466aa05e004666a0024660269000000911980a001000919809800a4000002660080040026466aa60122400246a0024466aa05800466aa60182400246a0024466aa05e00466e092001001001001335026335502800a335026335502800a33300200100a00a502750272223232300100532001355034223350014800088d4008894cd4ccd5cd19b8f002009034033130070011300600332001355033223350014800088d4008894cd4ccd5cd19b8f00200703303210011300600322335530071200123500122335502a002333500123355300b1200123500122335502e00235500d0010012233355500800d00200123355300b1200123500122335502e00235500c001001333555003008002001111222333553004120015025335530071200123500122335502a002355009001333553004120012235002225335333553021120013233503222333500322002002001350012200112330012253350021032100102f235001223300a00200500610031335029004003502600133553007120012350012232335502b003300100532001355034225335001135500a003221350022253353300c002008112223300200a004130060030023200135502d221122253350011002221330050023335530071200100500400111212223003004112122230010043200135502a2211225335001150232213350243004002335530061200100400122333573466e3c0080040940912210022337000040022464460046eb0004c8004d5409c88cccd55cf8009280f919a80f18021aba1002300335744004024464646666ae68cdc39aab9d5002480008cc8848cc00400c008c028d5d0a80118029aba135744a004464c6402466ae7004c0480404d55cf280089baa0012323232323333573466e1cd55cea8022400046666444424666600200a0080060046464646666ae68cdc39aab9d5002480008cc8848cc00400c008c04cd5d0a80119a8068091aba135744a004464c6402e66ae7006005c0544d55cf280089baa00135742a008666aa010eb9401cd5d0a8019919191999ab9a3370ea0029002119091118010021aba135573ca00646666ae68cdc3a80124004464244460020086eb8d5d09aab9e500423333573466e1d400d20002122200323263201933573803403202e02c02a26aae7540044dd50009aba1500233500975c6ae84d5d1280111931900999ab9c014013011135744a00226ae8940044d55cf280089baa0011335500175ceb44488c88c008dd5800990009aa81211191999aab9f0022501d233501c335501e300635573aa004600a6aae794008c010d5d100180809aba100112232323333573466e1d400520002350153005357426aae79400c8cccd5cd19b87500248008940548c98c8040cd5ce00880800700689aab9d500113754002464646666ae68cdc3a800a400c46424444600800a600e6ae84d55cf280191999ab9a3370ea004900211909111180100298049aba135573ca00846666ae68cdc3a801a400446424444600200a600e6ae84d55cf280291999ab9a3370ea00890001190911118018029bae357426aae7940188c98c8040cd5ce00880800700680600589aab9d500113754002464646666ae68cdc39aab9d5002480008cc8848cc00400c008c014d5d0a8011bad357426ae8940088c98c8030cd5ce00680600509aab9e5001137540024646666ae68cdc39aab9d5001480008dd71aba135573ca004464c6401466ae7002c0280204dd5000919191919191999ab9a3370ea002900610911111100191999ab9a3370ea004900510911111100211999ab9a3370ea00690041199109111111198008048041bae35742a00a6eb4d5d09aba2500523333573466e1d40112006233221222222233002009008375c6ae85401cdd71aba135744a00e46666ae68cdc3a802a400846644244444446600c01201060186ae854024dd71aba135744a01246666ae68cdc3a8032400446424444444600e010601a6ae84d55cf280591999ab9a3370ea00e900011909111111180280418071aba135573ca018464c6402666ae7005004c04404003c03803403002c4d55cea80209aab9e5003135573ca00426aae7940044dd50009191919191999ab9a3370ea002900111999110911998008028020019bad35742a0086eb4d5d0a8019bad357426ae89400c8cccd5cd19b875002480008c8488c00800cc020d5d09aab9e500623263200c33573801a01801401226aae75400c4d5d1280089aab9e500113754002464646666ae68cdc3a800a400446424460020066eb8d5d09aab9e500323333573466e1d400920002321223002003375c6ae84d55cf280211931900499ab9c00a009007006135573aa00226ea8004488c8c8cccd5cd19b87500148010848880048cccd5cd19b875002480088c84888c00c010c018d5d09aab9e500423333573466e1d400d20002122200223263200a33573801601401000e00c26aae7540044dd50009191999ab9a3370ea0029001100b11999ab9a3370ea0049000100b11931900319ab9c007006004003135573a6ea80052612001491035054310023500122350022222222222223333500d25013250132501323335530111200150122350012253355335333573466e3cd400888008d4010880080880844ccd5cd19b873500222001350042200102202110211350170031501600d320013550142211222533500113500322001221333500522002300400233355300712001005004001133500f2253350022100310015001121223002003112200122333573466e1c00800403002c8cc0094014004c8004d540388894cd40044008884d400888cc01cccc02000801800400cc8004d5403488894cd40044008884d4008894cd4ccd5cd19b870014800003c0384ccc02001c01800c4ccc02001ccd402448ccc00402000c00801800c4488008488488cc00401000c448848cc00400c008448cc004008010894cd40084004400c48800848800448cd400888ccd400c88008008004d40048800448848cc00400c0084848c0040084880088488c00400c448c8c00400488cc00cc0080080053011e581cd52e11f3e48436dd42dbec6d88c239732e503b8b7a32af58e5f87625004c011e581c01cecfaeda9d846c08675902b55a6371f593d9239744867462c5382e0001";
export const refScript2 =
  "d818591667820259166259165f0100003332332232333222323232323232323232332232323232323232333222323232323232323232323233223232323232323232323232323232323232323232323232323232323232323233223232323232232323223232323232323232323223232322323253353322323232323232323232323232353333573466e1cd55cea811a40004666aaa0a26eb8d5d0a8119bae35742a0446eb8d5d09aba2502223263206a3357380d60d40d0444a666a0222660d0660de90009aa8041111110021983419837a40026aa010444444002660d066096a0086aa01044444400c660d066096a0086aa010444444006660d0660966606a098a00c004660d0660966606a098a00e00666096660a8098a00c660a8098a00e442660d4a66a002442660d8666a0b2a0e46466a0b666a0b8a0c20f466a0bc6a0c40020f4609aa03a606ea026660d8666aa0cc60682400246a00244660ec660cc607200266aa0d0646a002444444444010a04000a900128049983619982719b8a500d0023235001222222222006501d00133077330633302c5013303c501d335506503d03d32337060029002181da80e899835199a82ba8381919a82c99a82d1a83000083c19a82e282f03c1825a80d981aa8089983a99830998152808981d280d99aa83181d81d981ca80d998351a8279919191a80091111111111118070012809990009aa83c91299a8008a8299109a80111299a999ab9a3371e00400e0fc0fa26a0b00022600c006a01a660d4660e290011aa8071110009983519838a40046aa018444444008660d4660e290011aa8061111110009983519826a8031aa8071110019983519826a8031aa8061111110031983519826a8031aa8061111110019983519982619b8a500b337146aa01844444400466e28d540388880094034c8d400488888888801d406c008ccd54190c0c8480048d400488d4148cc8c88c008004c8004d541f0894cd400454158884d4008894cd4cc15c00801c4d416c0044c01800cc8d40048888888880254078c8004c0dc005401c4cc1a0c8c8c8d400c888888888888ccd54c0fc48004d41c941cc94cd4ccd5cd19b8f00f3500122350022200208501084011333573466e1c038d400488d4008880042140421004421004030c8d400488004c0e1406cc8d400488008c0dd4069403ccc1a0cc12cd5403888800d4010cc1a0cc12cd54038888008004cc1bd200235500e22200113500c223333500123263206b335738921024c680006b200123263206b3357389201024c680006b23263206b3357389201024c680006b1323500122222222222200c500a13550022222220051355001222222002153353048302c50071622135002222533500416221350022225335004133333355555506900800700600300200122161355001222222005153353046302a50051622135002222533500416221350022225335004133333355555506700800700600300200122161355002220021533530443233301f02600132335530251200123500122335505a002335530281200123500122335505d00233704900080080080099a82d19aa82b01719a82d19aa82b01719982a800817017282da82d9aa800910008b1109a801111299a8020999aaa826001801000910b0a99a9919199aa98108900091299a9a8011111299a9981200400209a82519aa82e0010018a8249099a82e8008010800a82d9a8009111111111110052801991a800911111111002a8060b1109a801112999a8010b10b10a99a802099aa82c800801110b0a99a9821181328008b1109a801111299a8020999aaa825001801000910b09a800910011999ab9a3370ea00890021091100091999ab9a3370ea00a90011091100191999ab9a3370ea00c90001199109111980100280219a81619aa82e02d82d9aba15008323232323333573466e1d40052002212200123333573466e1d400920002332212233002004003375c6ae854010cd40c8cd54188184184d5d09aba250042326320643357380ca0c80c40c226aae7540084d55cf280089baa001357426ae8940208c98c8178cd5ce02f82f02e02d82d1999ab9a3370e6aae7540092000233221233001003002323232323232323232323232323333573466e1cd55cea8062400046666666666664444444444442466666666666600201a01801601401201000e00c00a00800600466a0700726ae854030cd40e00e4d5d0a80599a81c01d1aba1500a3335503c75ca0766ae854024ccd540f1d7281d9aba1500833503804235742a00e666aa078086eb4d5d0a8031919191999ab9a3370e6aae754009200023350583232323333573466e1cd55cea80124000466a0ba66a09aeb4d5d0a80118271aba135744a004464c640e466ae701cc1c81c04d55cf280089baa00135742a0046464646666ae68cdc39aab9d5002480008cd417ccd4135d69aba15002304e357426ae8940088c98c81c8cd5ce03983903809aab9e5001137540026ae84d5d1280111931903719ab9c06f06e06c135573ca00226ea8004d5d0a80299a81c3ae35742a008666aa07807e40026ae85400cccd540f1d710009aba150023041357426ae8940088c98c81a8cd5ce03583503409aba25001135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135744a00226aae7940044dd50009aba150023031357426ae8940088c98c8170cd5ce02e82e02d082d89931902d99ab9c491035054350005b135573ca00226ea80044d55cea80109aab9e50011375400226666ae68cdc39aab9d5009480008ccccccccc88888888848ccccccccc00402802402001c01801401000c008dd71aba15009375c6ae854020c144d5d0a80398289aba15006302735742a00a604e6ae854010dd69aba15003375a6ae854008c0a8d5d09aba250022326320543357380aa0a80a426ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135573ca00226ea80044d5d1280089aab9e50011375400244666aa600c240026008016a080666aa600c2400244a66a6a0044444a66a6601200e00826a05e0062a05c4266a0840020042002a0806a004444444444444014446a004446a006446466a00a466a0084a66a666ae68cdc780100082a82a0a801882a102a119a802102a1299a999ab9a3371e0040020aa0a82a00620a82a66a00642a66a0044266a004466a004466a004466a00446605c00400240ae466a00440ae46605c0040024440ae44466a00840ae444a66a666ae68cdc380300182d02c8a99a999ab9a3370e00a0040b40b22660a800800220b220b220a42a66a002420a420a444466aa60102400246a0024466aa07a00466aa60162400246a0024466aa080004666a00246601490000009119805801000919805000a400000266aa60102400246a0024466aa07a004666a002466aa60182400246a0024466aa0820046aa01c00200244666aaa012052004002466aa60182400246a0024466aa0820046aa01a002002666aaa008048004002222444666aa600824002a07a66aa600e2400246a0024466aa0780046aa012002666aa600824002446a00444a66a666aa6018240026a07ea08046a002446601400400a00c2006266a082008006a07c00266aa600e2400246a002446466aa07a006600200a640026aa0a244a66a00226aa0140064426a00444a66a6601800401022444660040140082600c006004640026aa0944422444a66a00220044426600a004666aa600e2400200a0080022242444600600822424446002008640026aa08e442244a66a0022a07644266a078600800466aa600c24002008002640026aa08c4422444a66a00226a00644002442666a00a440046008004666aa600e2400200a0080024466e000080048d4004888800c8d40048888888888880148d400488888888888802088ccdc62400000400246a00244444444400246a00244444444400646a002444444444008911001232230023758002640026aa07a446666aae7c004940c08cd40bcc010d5d080118019aba2002035232323333573466e1cd55cea8012400046644246600200600460166ae854008c014d5d09aba2500223263203533573806c06a06626aae7940044dd50009191919191999ab9a3370e6aae7540112000233332222123333001005004003002300935742a008666aa010eb9401cd5d0a8019919191999ab9a3370ea0029002119091118010021aba135573ca00646666ae68cdc3a80124004464244460020086eb8d5d09aab9e500423333573466e1d400d20002122200323263203c33573807a07807407207026aae7540044dd50009aba1500233500a75c6ae84d5d1280111931901b19ab9c037036034135744a00226ae8940044d55cf280089baa0011335500175ceb44488c88c008dd5800990009aa81d11191999aab9f0022502e233502d3355029300635573aa004600a6aae794008c010d5d100181989aba1001232323333573466e1cd55cea8012400046644246600200600460166ae854008cd4014028d5d09aba2500223263203133573806406205e26aae7940044dd500089119191999ab9a3370ea002900011a80a18029aba135573ca00646666ae68cdc3a801240044a028464c6406466ae700cc0c80c00bc4d55cea80089baa001232323333573466e1d400520062321222230040053007357426aae79400c8cccd5cd19b875002480108c848888c008014c024d5d09aab9e500423333573466e1d400d20022321222230010053007357426aae7940148cccd5cd19b875004480008c848888c00c014dd71aba135573ca00c464c6406466ae700cc0c80c00bc0b80b44d55cea80089baa001232323333573466e1cd55cea80124000466442466002006004600a6ae854008dd69aba135744a004464c6405c66ae700bc0b80b04d55cf280089baa0012323333573466e1cd55cea800a400046eb8d5d09aab9e500223263202c33573805a05805426ea80048c8c8c8c8c8cccd5cd19b8750014803084888888800c8cccd5cd19b875002480288488888880108cccd5cd19b875003480208cc8848888888cc004024020dd71aba15005375a6ae84d5d1280291999ab9a3370ea00890031199109111111198010048041bae35742a00e6eb8d5d09aba2500723333573466e1d40152004233221222222233006009008300c35742a0126eb8d5d09aba2500923333573466e1d40192002232122222223007008300d357426aae79402c8cccd5cd19b875007480008c848888888c014020c038d5d09aab9e500c23263203533573806c06a06606406206005e05c05a26aae7540104d55cf280189aab9e5002135573ca00226ea80048c8c8c8c8cccd5cd19b875001480088ccc888488ccc00401401000cdd69aba15004375a6ae85400cdd69aba135744a00646666ae68cdc3a80124000464244600400660106ae84d55cf280311931901719ab9c02f02e02c02b135573aa00626ae8940044d55cf280089baa001232323333573466e1d400520022321223001003375c6ae84d55cf280191999ab9a3370ea004900011909118010019bae357426aae7940108c98c80accd5ce01601581481409aab9d50011375400224464646666ae68cdc3a800a40084a03246666ae68cdc3a8012400446a038600c6ae84d55cf280211999ab9a3370ea00690001280e11931901619ab9c02d02c02a029028135573aa00226ea80048c8cccd5cd19b8750014800880c08cccd5cd19b8750024800080c08c98c80a0cd5ce01481401301289aab9d375400246a002444444444004446460026e4800cc8004d540b88894cd40044cc018008010884cd40088cc018dc919b8a001005002233006372466e2801400400888ccd5cd19b8f00200102c02b48020494cd4004840a840a048488c00800c44880048cc009405c004c8004d540948894cd40044008884d400888cc01cccc02000801800400cc8004d5409088894cd40044008884d4008894cd4ccd5cd19b87001480000ac0a84ccc02001c01800c4ccc02001ccd406cccd55402401c00800401800c44488848ccc00401000c00888ccdc600119b81371a00200400224446a004446a004446a00a446a00444a666a666a02001600c0042a66a0022a66a00a2666a01c01600600e20542666a01c01600600e20542666a01c01600600e2442466002006004244246600200600424446a004446a00644a666a666a01200e0080042a66a00620022048204620482442466002006004244464646464a666a00c42a666a00c42a666a0104260089309801a4c2a666a00e4260089309801a4c2042203e2a666a00e4260089309801a4c2a666a00c4260089309801a4c20402a666a00a4203c203e203a2a666a00a42a666a00e42600a930980224c2a666a00c42600a930980224c2040203c2a666a00c42600a930980224c2a666a00a42600a930980224c203e4a666a00a42a666a00e42a666a00e42666a01c0140040022c2c2c203e2a666a00c42a666a00c42666a01a0120040022c2c2c203c203a4a666a00842a666a00c42a666a00c42666a01a0120040022c2c2c203c2a666a00a42a666a00a42666a0180100040022c2c2c203a20384a666a00642a666a00a42a666a00a42666a0180100040022c2c2c203a2a666a00842a666a00842666a01600e0040022c2c2c203820364a666a00442a666a00842a666a00842666a01600e0040022c2c2c20382a666a00642a666a00642666a01400c0040022c2c2c2036203424244460060082244400422444002246a0024444444400e446a0024466600a0080040024446464600200a640026aa0344466a0029000111a80111299a999ab9a3371e00401203e03c2600e0022600c006640026aa0324466a0029000111a80111299a999ab9a3371e00400e03c03a20022600c00622442466002006004224466aa0046a006a0080022464246600244666a00a440040040020046a002440022246600244a66a004202820020222244004244244660020080062222224444442466666600200e00c00a00800600444a66a0042002201c4646666ae68cdc39aab9d5001480008dd71aba135573ca004464c6400c66ae7001c0180104dd50008891119191999ab9a3370ea0029001119091180080198029aba135573ca00646666ae68cdc3a801240004642446004006600e6ae84d55cf280211931900499ab9c00a009007006135573aa00226ea80052612001491035054310011233333333001002225335333573466e1c008004028024401c54cd4ccd5cd19b8900200100a0091005100622333573466e2000800402802488ccd5cd19b8900200100a00922333573466e24008004024028018894cd4ccd5cd19b8900200100a00910011002225335333573466e240080040280244008400488ccd5cd19b8700200100800712220031222002122200122333573466e2000800400c010488008488004448c8c00400488cc00cc0080080053011ad8799f44000643b044000de1404b001f4d70526f79616c7479ff004c01ffd8799f581c2ad3e9d39841502dd0ef7197f2f82f01351f0eea67f52420411cffb6581cb863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4fd8799f5820f77dd3546d8f0fc78d869394c3fbd0f3bb09a9a1988896325f2255fec3fc6fadffd8799f5820c237972884731f38919d629ae8a18c45badd0472f6d59984ba57fb1faf0e1330ffd8799fd87a9f581c997392e0c6e62ebe8202be078bbe59a9254e7d209192ed99717ceaa9ffd87a9fffffd8799fd8799f581cf0f6e4e59acf0e5b74575811676faf3afe612f4cebbf489fcfd9d15fffd8799fd8799fd8799f581c57c00addb4ee060aefa49c9e7ce3368ed52e94acd79ffcfaa61340740cffffffff1a4d7c6d001b000001843e129febd8799fd8799f5820dc2a273465fc362edb073efb0d079fc0b7b513597fccc3c49c3522b0d6505c97ff02ffff0001";
