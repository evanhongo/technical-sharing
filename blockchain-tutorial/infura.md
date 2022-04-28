# What is Infura?
## Infura is a **Node provider** that provides the tools and infrastructure that allow developers to easily take their blockchain application from testing to scaled deployment - with simple, reliable access to Ethereum and IPFS.

---

# What networks does Infura support?
## Infura supports ``Ethereum mainnet`` and testnets (Rinkeby, ``Ropsten``, ``Kovan``, Görli), IPFS, Filecoin (Beta), Eth2 Beacon Chain (Beta), Polygon PoS (Beta), Optimism Ethereum, and Arbitrum Rollup.

---

# What are the advantages of using Infura versus running your own Ethereum node?
## If you’re interested in developing on Ethereum, spinning up your own node is probably the first place you start. Maybe you build an awesome Ethereum-based app: a wallet, for instance. As you build out more features and add richness to the user experience, adoption accelerates. Suddenly you need to accommodate more users, higher transaction volumes and still ensure a stable and seamless user experience. At this point, a single node won’t cut it anymore.

<br/>

## There are three ways to scale your infrastructure:

<br/>

## **1.** Do it yourself. If you have the resources to build out a development team and employ full time Site Reliability Engineers, you can scale up your own infrastructure by spinning up and maintaining more Ethereum nodes in-house.

## **2.** Outsource your infrastructure. If you don’t have the resources to grow and maintain your own infrastructure - and you’d rather dedicate development time to your core product - you can use cloud-based node service providers like Infura to connect to Ethereum and IPFS through their APIs.

## **3.** Adopt a hybrid infrastructure model. If your own node serves you well but you want the flexibility to tap into node service providers as and when you need them, then a hybrid infrastructure model might be for you.

---

# What is Hybrid infrastructure?

## ``Hybrid infrastructure`` simply means using your own node in combination with cloud-based nodes. Tried and tested node service providers like Infura have the resources to ensure maximum network stability and uptime. Maintaining your own node concurrently offers you the flexibility to confirm and verify transactions yourself. This approach diversifies your infrastructure and allows you to tap into the scale and stability of cloud-based nodes to help you manage spikes in traffic.

---

# Does every DApp that uses MetaMask rely on Infura? 
## MetaMask (by default) uses Infura, but has the ability to switch to another node provider, even somebody’s own node.

---

# Which clients does Infura use?

## **Geth:** Go Ethereum is one of the three original implementations (along with C++ and Python) of the Ethereum protocol. It is written in Go, fully open source and licensed under the GNU LGPL v3.

## **OpenEthereum:** An Ethereum client developed by Parity Technologies and Gnosis using the Rust programming language, licensed under the GNU GPL v3 license.

## **Hyperledger Besu:** Hyperledger Besu is an open source Ethereum client developed under the Apache 2.0 license and written in Java.

## **Teku:** Teku is a Java implementation of the Ethereum 2.0 Beacon Chain under the Apache 2.0 license, and maintained by the same team behind Besu.

## **Lotus:** Lotus is a Filecoin implementation written by Protocol Labs in Go and is a suite of command-line applications: lotus, lotus-miner and lotus-worker. Lotus is a universally open project and dual-licensed under MIT + Apache 2.0 terms.

## **Go-IPFS:** Go-IPFS is the primary reference implementation of IPFS. It is a command-line application, though can also be used as a library in other Go programs. The go-IPFS project is dual-licensed under the Apache 2.0 and MIT terms.