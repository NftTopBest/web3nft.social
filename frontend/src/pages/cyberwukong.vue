<script setup lang="ts">
</script>

<template>
  <div id="home" class="flex flex-col min-h-screen bg-[#1E1522] text-white items-center">
    <!-- TODO: 顶部背景图, 用 bg 属性？需要导出圆弧状的 png 透明图片 -->
    <div class="flex flex-col w-278 items-center">
      <div id="top-nav" class="flex h-44 w-full py-11 text-2xl leading-21 items-center">
        <div id="logo" class="mr-20 flex items-center">
          <img src="/cyberwukong/logo.svg" class="rounded-full h-20 w-20 mr-5">
          <span>CYBERWUKONG</span>
        </div>
        <div id="menu" class="text-xs mr-20">
          <a href="#home" class="mr-4 cursor-pointer">HOME</a>
          <a href="#about" class="mr-4 cursor-pointer">ABOUT US</a>
          <a href="benefits-utilities" class="mr-4 cursor-pointer">BENEFITS & UTILITIES</a>
          <a href="#roadmap" class="mr-4 cursor-pointer">ROADMAP</a>
          <a href="#team" class="mr-4 cursor-pointer">THE TEAM</a>
          <a href="#faq" class="cursor-pointer">FAQ'S</a>
        </div>
        <div id="social-link" class="flex items-center">
          <ant-design:twitter-circle-filled class="mr-2" />
          <ant-design:twitter-circle-filled class="mr-2" />
          <ant-design:twitter-circle-filled />
        </div>
      </div>
      <div id="hero" class="flex flex-col w-256 items-center">
        <h2 class="text-center text-5xl mb-6">
          <div class="mb-2">
            <span class="text-blue-500 mr-2">8888</span>
            Limited monkey NFT
            <span class="text-purple-500">"CYBER N"</span>
          </div>
          Metaverse Ticket
        </h2>
        <p class="text-xs text-center mb-6">
          Cyber Wukong NFT is 8888 cute monkey NFTs, randomly generated from 200 feature components purely hand-painted, each one is unique, and is issued in limited quantities on the Ethereum blockchain with the ERC-721 protocol.
        </p>
        <button class="bg-gradient-to-b rounded-full w-48 h-12 text-large from-[#CC1CC3] to-[#3D91E0] py-2 px-10">
          MINT
        </button>
      </div>
      <div id="what" class="flex mt-96 items-center justify-around">
        <div class="w-[554px] text-center mr-8">
          <div class="text-4xl mb-10">
            What is Cyber Wukong NFT?
          </div>
          <p class="text-lg mb-10 text-justify">
            Cyber Wukong, as the creation hero of the "Cyber N" Metaverse, is his first appearance this time. If you own Cyber Wukong NFT, it also means that you have the highest-level and special rights of the "Cyber N" Metaverse.
          </p>
          <p class="text-lg text-justify">
            Cyber Wukong loves peace, although most of the time it is smiling, polite and cute, occasionally boring, weird, and sad. When Cyber Wukong sense injustice and evil forces within the world, he always stand up and bring justice; When being violated and extremely angry, Cyber Wukong will transform into a fierce beast!
          </p>
        </div>
        <div class="flex">
          <div class="flex flex-col mr-6">
            <img src="/cyberwukong/Clip-1.png" class="rounded-2xl h-64 w-64 inline-block mb-6">
            <img src="/cyberwukong/Clip-2.png" class="rounded-2xl h-64 w-64 inline-block">
          </div>
          <div class="flex flex-col mt-24">
            <img src="/cyberwukong/Clip-3.png" class="rounded-2xl h-64 w-64 inline-block mb-6">
            <img src="/cyberwukong/Clip-4.png" class="rounded-2xl h-64 w-64 inline-block">
          </div>
        </div>
      </div>
    </div>
    <div id="timeline" class="flex flex-col w-full items-center mt-40">
      <h3 class="text-4xl">
        Timelines
      </h3>
      <div class="text-2xl mt-4 mb-6">
        Each wallet address can buy up to 5 NFTs
      </div>
      <div>img list here with full width, 可以左右滑动功能</div>
      <button class="bg-gradient-to-b rounded-full from-[#CC1CC3] to-[#3D91E0] py-2 px-10">
        I want this NFT
      </button>
    </div>
    <div id="story" class="mt-40 px-20">
      <div class="flex items-center">
        <img src="/cyberwukong/Clip-5.png" class="rounded-2xl h-[565px] w-[540px] mr-10 ">

        <div class="w-[540px]">
          <h3 class="text-4xl mb-10">
            The story
          </h3>
          <p class="text-lg text-justify">
            Cyber Wukong is the beginning and the first superhero of "Cyber N" Metaverse. We will officially release the original movie "Cyber wukong" in the encryption field in 2022. It will be the world's first feature-length Sci-Fi movie released in the form of NFT, and it will be released on the blockchain first. "Cyber Wukong" will establish a new business model and DAO for film through blockchain technology.
          </p>
          <p class="text-lg text-justify">
            We hope that through the release of Cyber Wukong NFT, we can find like-minded friends and family members to build the "Cyber N" Metaverse together. Our team, with a strong background in cultural and entertainment, we will expand Cyber Wukong into movies, games, commercial products and many other fields in the future. We had been working on "Cyber N" for a long time. With you joining, our story can begin. Let us create a great story together!
          </p>
        </div>
      </div>
    </div>
    <div id="right" class="w-full px-20 mt-20">
      <div class="text-4xl text-center">
        Right as Owner
      </div>
      <div class="flex items-center justify-between mt-12">
        <div class="w-[250px] h-[360px] bg-black rounded-2xl border-gray-400 border-2 px-6 py-8">
          <div class="w-[70px] h-[70px] rounded-full bg-blue-500" />
          <div class="text-xl mt-4">
            Priority Right
          </div>
          <div class="text-base font-light text-left mt-4">
            Cyber Wukong NFT will serve as the founding pass of "Cyber N" Metaverse. Every product that ...
          </div>
          <Button class="bg-gradient-to-b flex from-[#CC1CC3] to-[#3D91E0] h-10 py-2 px-10 text-lg rounded-full mt-8">
            Read More
          </Button>
        </div>
        <div class="w-[250px] h-[360px] bg-black rounded-2xl border-gray-400 border-2 px-6 py-8">
          <div class="w-[70px] h-[70px] rounded-full bg-blue-500" />
          <div class="text-xl mt-4">
            Priority Right
          </div>
          <div class="text-base font-light text-left mt-4">
            Cyber Wukong NFT will serve as the founding pass of "Cyber N" Metaverse. Every product that ...
          </div>
          <Button class="bg-gradient-to-b flex from-[#CC1CC3] to-[#3D91E0] h-10 py-2 px-10 text-lg rounded-full mt-8">
            Read More
          </Button>
        </div>
        <div class="w-[250px] h-[360px] bg-black rounded-2xl border-gray-400 border-2 px-6 py-8">
          <div class="w-[70px] h-[70px] rounded-full bg-blue-500" />
          <div class="text-xl mt-4">
            Priority Right
          </div>
          <div class="text-base font-light text-left mt-4">
            Cyber Wukong NFT will serve as the founding pass of "Cyber N" Metaverse. Every product that ...
          </div>
          <Button class="bg-gradient-to-b flex from-[#CC1CC3] to-[#3D91E0] h-10 py-2 px-10 text-lg rounded-full mt-8">
            Read More
          </Button>
        </div>
        <div class="w-[250px] h-[360px] bg-black rounded-2xl border-gray-400 border-2 px-6 py-8">
          <div class="w-[70px] h-[70px] rounded-full bg-blue-500" />
          <div class="text-xl mt-4">
            Priority Right
          </div>
          <div class="text-base font-light text-left mt-4">
            Cyber Wukong NFT will serve as the founding pass of "Cyber N" Metaverse. Every product that ...
          </div>
          <Button class="bg-gradient-to-b flex from-[#CC1CC3] to-[#3D91E0] h-10 py-2 px-10 text-lg rounded-full mt-8">
            Read More
          </Button>
        </div>
      </div>
      <div class="bg-gradient-to-b flex from-[#CC1CC3] to-[#3D91E0] text-center w-full footer items-center justify-center">
        © Yuto Labs.2022
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: blank
</route>
