
import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';

export default function Portfolio(){
 return(
 <ScrollView style={styles.container}>
  <Text style={styles.title}>Portfólio</Text>
  <Text style={styles.name}>Vinicius Cerqueira Silva</Text>
  <Text style={styles.subtitle}>Analista de MIS | Business Intelligence | Dados & Automação</Text>

  {/* Resumo */}
  <Text style={styles.header}>Resumo Profissional</Text>
  <View style={styles.card}>
   <Text style={styles.body}>
    Analista de MIS com sólida experiência em Business Intelligence, análise de dados e automação de processos em ambientes financeiros e de alta complexidade operacional. Especialista em Power BI, SQL e Excel Avançado, com histórico comprovado de construção de relatórios gerenciais, monitoramento de KPIs e entrega de insights estratégicos para suporte à tomada de decisão.
   </Text>
  </View>

  {/* Competências */}
  <Text style={styles.header}>Competências Técnicas</Text>
  <View style={styles.card}>
   <Text style={styles.cardTitle}>BI & Reporting</Text>
   <Text style={styles.body}>Power BI (DAX, Power Query, modelagem de dados), Excel Avançado (Power Pivot, tabelas dinâmicas, VBA)</Text>
  </View>
  <View style={styles.card}>
   <Text style={styles.cardTitle}>Banco de Dados</Text>
   <Text style={styles.body}>SQL — SELECT, JOIN, subqueries, agregações, filtros avançados</Text>
  </View>
  <View style={styles.card}>
   <Text style={styles.cardTitle}>Análise & MIS</Text>
   <Text style={styles.body}>Relatórios gerenciais, análise de KPIs, mapeamento de indicadores, data storytelling</Text>
  </View>
  <View style={styles.card}>
   <Text style={styles.cardTitle}>Automação</Text>
   <Text style={styles.body}>Excel/VBA e Power Query — redução de 14h de trabalho manual em projeto real</Text>
  </View>

  {/* Experiência */}
  <Text style={styles.header}>Experiência Profissional</Text>

  <View style={styles.card}>
   <Text style={styles.cardTitle}>Analista de Operações & BI</Text>
   <Text style={styles.company}>BSC Consignado (Paraná Banco)</Text>
   <Text style={styles.period}>Abr/2023 – Atual</Text>
   <Text style={styles.bullet}>• Dashboards estratégicos em Power BI para carteira de crédito consignado</Text>
   <Text style={styles.bullet}>• Relatórios MIS para acompanhamento de KPIs de produção, conversão e inadimplência</Text>
   <Text style={styles.bullet}>• Automação com Power Query eliminando 14h semanais de trabalho repetitivo</Text>
   <Text style={styles.bullet}>• Extração e tratamento de dados para relatórios gerenciais diários/semanais/mensais</Text>
  </View>

  <View style={styles.card}>
   <Text style={styles.cardTitle}>Supervisor de Operações CX Pleno</Text>
   <Text style={styles.company}>DBM Contact Center</Text>
   <Text style={styles.period}>Set/2020 – Out/2022</Text>
   <Text style={styles.bullet}>• Dashboards em Power BI e Excel para monitoramento de SLA, TMA e NPS</Text>
   <Text style={styles.bullet}>• Relatórios MIS com grandes volumes de dados para reportes à diretoria</Text>
   <Text style={styles.bullet}>• Automações de coleta e consolidação de dados reduzindo erros e tempo de processamento</Text>
   <Text style={styles.bullet}>• Apresentações executivas com insights para tomada de decisão</Text>
  </View>

  <View style={styles.card}>
   <Text style={styles.cardTitle}>Supervisor de Operações</Text>
   <Text style={styles.company}>SoftMarketing</Text>
   <Text style={styles.period}>Set/2017 – Mai/2020</Text>
   <Text style={styles.bullet}>• Gestão de KPIs e relatórios de performance para lideranças</Text>
   <Text style={styles.bullet}>• Estratégias baseadas em dados para melhoria de performance de equipes</Text>
   <Text style={styles.bullet}>• Painéis de acompanhamento para suporte analítico à tomada de decisão</Text>
  </View>

  {/* Formação */}
  <Text style={styles.header}>Formação Acadêmica</Text>
  <View style={styles.card}>
   <Text style={styles.cardTitle}>Análise e Desenvolvimento de Sistemas</Text>
   <Text style={styles.body}>Unicesumar  |  Conclusão prevista: 2026</Text>
  </View>

  {/* Certificações */}
  <Text style={styles.header}>Certificações</Text>
  <View style={styles.card}>
   <Text style={styles.bullet}>• SQL para Análise de Dados — Data Science Academy (2024)</Text>
   <Text style={styles.bullet}>• Excel Avançado e Power BI — Udemy (2023)</Text>
  </View>

  {/* Idiomas */}
  <Text style={styles.header}>Idiomas</Text>
  <View style={styles.card}>
   <Text style={styles.bullet}>• Português: Nativo</Text>
   <Text style={styles.bullet}>• Inglês: Intermediário — leitura técnica</Text>
  </View>

  <View style={styles.footer}>
   <Text style={styles.footerText}>Vinicius Cerqueira Silva  •  2026</Text>
  </View>
 </ScrollView>
 )
}

const styles=StyleSheet.create({
container:{flex:1,padding:20,backgroundColor:'#DDEBF7'},
title:{fontSize:24,fontWeight:'bold',textAlign:'center',marginBottom:4,color:'#08122F'},
name:{fontSize:20,fontWeight:'bold',textAlign:'center',color:'#29499A'},
subtitle:{fontSize:13,textAlign:'center',color:'#555',marginBottom:20},
header:{fontSize:17,fontWeight:'bold',color:'#29499A',marginTop:16,marginBottom:6},
card:{backgroundColor:'#fff',padding:15,borderRadius:12,marginVertical:5},
cardTitle:{fontSize:16,fontWeight:'bold',marginBottom:2},
company:{fontSize:14,color:'#29499A',fontWeight:'600'},
period:{fontSize:12,color:'#888',marginBottom:6},
body:{fontSize:14,color:'#333',lineHeight:20},
bullet:{fontSize:14,color:'#333',lineHeight:22},
footer:{backgroundColor:'#182744',padding:15,borderRadius:15,marginVertical:20},
footerText:{color:'#fff',textAlign:'center'}
});
