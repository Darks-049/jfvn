import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Cabecalho from "./cabecalho";
import { Secao } from "./secao";
import { Barrabaixo } from "./barrabaixo";


export default function Home(){
  return (
    <>
      <Cabecalho></Cabecalho>
      <Secao></Secao>
      <Barrabaixo></Barrabaixo>
      </>
  );
}