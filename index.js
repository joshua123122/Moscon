const discordBot = new Discord.Client(zjsqB35IMYppBst21Hg4tEdAID6_CKGo);
15	discordBot.login(discordConfig.token);
16	
17	discordBot.on('ready', () => {
18	    discordBot.channels
…	
53	            unfurl_links: true,
54	        });
55	    })
56	    .catch(console.error);
57	});
58	
59	discordBot.on('disconnect', (message, code) => {
