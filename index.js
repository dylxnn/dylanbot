console.log("")
console.log("██████╗ ██╗   ██╗██╗      █████╗ ███╗   ██╗███████╗    ██╗      ██████╗ ██████╗ ██████╗ ██╗   ██╗    ██████╗  ██████╗ ████████╗")
console.log("██╔══██╗╚██╗ ██╔╝██║     ██╔══██╗████╗  ██║██╔════╝    ██║     ██╔═══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝    ██╔══██╗██╔═══██╗╚══██╔══╝")
console.log("██║  ██║ ╚████╔╝ ██║     ███████║██╔██╗ ██║███████╗    ██║     ██║   ██║██████╔╝██████╔╝ ╚████╔╝     ██████╔╝██║   ██║   ██║   ")
console.log("██║  ██║  ╚██╔╝  ██║     ██╔══██║██║╚██╗██║╚════██║    ██║     ██║   ██║██╔══██╗██╔══██╗  ╚██╔╝      ██╔══██╗██║   ██║   ██║   ")
console.log("██████╔╝   ██║   ███████╗██║  ██║██║ ╚████║███████║    ███████╗╚██████╔╝██████╔╝██████╔╝   ██║       ██████╔╝╚██████╔╝   ██║   ")
console.log("╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝    ╚══════╝ ╚═════╝ ╚═════╝ ╚═════╝    ╚═╝       ╚═════╝  ╚═════╝    ╚═╝   ")
console.log("")
console.log("Pretty much, all your going to need for a lobby bot.")
console.log("")
﻿const EGClient = require('epicgames-client').Client;
const Fortnite = require('epicgames-fortnite-client');
const { ESubGame } = Fortnite;
let eg = new EGClient({ // EGClient
  email: "dylans@bot.com1",
  password: "dylans@bot.com1",
  debug: console.log,
  });
  eg.init().then(async (success) => {
    console.log("Client startup successful")
    if(!success)
      throw new Error('Cannot initialize EpicGames launcher.');
    if(!await eg.login())
      throw new Error('Cannot login on EpicGames account.');
      const fortnite = await eg.runGame(Fortnite, {
  netCL: '7681591',
  partyBuildId: '1:1:7681591', // partyBuildId
  });
  console.log("Parsed partyBuildId and netCL")
  console.log("Setting EGClient subgame to BattleRoyale")
    const br = await fortnite.runSubGame(ESubGame.BattleRoyale);
    console.log("Set EGClient subgame to BattleRoyale")
    fortnite.communicator.on('party:member:joined', async (member) => {
      console.log("Parsing invite join request")
      console.log(`Member#${member.id} joined!`);
      console.log(`Members count: ${fortnite.party.members.length}`);
      console.log(`Setting client party outfits to Member#${member.id}`)
      fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_477_Athena_Commando_F_SpaceSuit.CID_477_Athena_Commando_F_SpaceSuit");
      fortnite.party.me.setBattlePass(true, 67 , 120, 100);

    });
    fortnite.communicator.on('party:invitation', async (invitation) => { // invitation
      console.log("Party invitation found")
      current_party = invitation.party;
      await invitation.accept()
      console.log("Party invitation accepted")
    });
    fortnite.communicator.on('friend:request', async (friendops) => {
        console.log("Recieved friend request from " + friendops.friend.id)
        eg.acceptFriendRequest(friendops.friend.id) // acceptFriendRequest
        console.log("Sucessfully accepted " + friendops.friend.id + " friend request")
    });
    fortnite.communicator.on('friend:message', async data => {
      var args = data.message.split(" ");
      console.log(`${args[0]}.${args[1]}`)
      if (args[0] == "!skin"){
          console.log(args[1])
          fortnite.party.me.setOutfit(`/Game/Athena/Items/Cosmetics/Characters/${args[1]}.${args[1]}`);
      }
      if (args[0] == "!emote"){
        console.log(args[1])
        fortnite.party.me.setEmote(`/Game/Athena/Items/Cosmetics/Dances/${args[1]}.${args[1]}`);
      }
      if (args[0] == "!back_bling"){
        console.log(args[1])
        fortnite.party.me.setBackpack(`/Game/Athena/Items/Cosmetics/Backpacks/${args[1]}.${args[1]}`);
      }
      if (args[0] == "!pickaxe"){
        console.log(args[1])
        fortnite.party.me.setPickaxe(`/Game/Athena/Items/Cosmetics/Pickaxes/${args[1]}.${args[1]}`);
      }
      if (args[0] == "!end_emote"){
        fortnite.party.me.clearEmote();
      }
      if (args[0] == "!ready"){
        fortnite.party.me.setReady(true);
      } a
      if (args[0] == "!ready_cancel"){
        fortnite.party.me.setReady(false);
      }
      if (args[0] == "!upgrade_battle_pass"){
        fortnite.party.me.setBattlePass(true, 999999999, 999999999, 999999999);
      }
    });
    });
