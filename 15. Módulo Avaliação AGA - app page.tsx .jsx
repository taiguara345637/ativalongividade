"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Save, CheckCircle2 } from "lucide-react"

export default function AGAPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Nova Avaliação Geriátrica Ampla (AGA)</h1>
          <p className="text-muted-foreground flex items-center gap-2">
            <span className="font-medium">Paciente:</span> Maria Silva Santos
            <span className="mx-2">|</span>
            <Calendar className="h-4 w-4" />
            <span className="font-medium">Data:</span> 07/11/2025
          </p>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="funcionalidade" className="w-full">
          <TabsList className="grid w-full grid-cols-7 h-auto">
            <TabsTrigger value="funcionalidade" className="text-xs sm:text-sm">
              Funcionalidade
            </TabsTrigger>
            <TabsTrigger value="cognicao" className="text-xs sm:text-sm">
              Cognição
            </TabsTrigger>
            <TabsTrigger value="humor" className="text-xs sm:text-sm">
              Humor/Comp.
            </TabsTrigger>
            <TabsTrigger value="mobilidade" className="text-xs sm:text-sm">
              Mobilidade
            </TabsTrigger>
            <TabsTrigger value="comunicacao" className="text-xs sm:text-sm">
              Comunicação
            </TabsTrigger>
            <TabsTrigger value="sistemas" className="text-xs sm:text-sm">
              Sistemas Globais
            </TabsTrigger>
            <TabsTrigger value="contextuais" className="text-xs sm:text-sm">
              Fatores Contextuais
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: Funcionalidade */}
          <TabsContent value="funcionalidade" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Atividades de Vida Diária Básicas (AVD's)</CardTitle>
                <CardDescription>Escala de Katz</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Tomar banho",
                  "Vestir-se",
                  "Uso do vaso sanitário",
                  "Transferência",
                  "Continência",
                  "Alimentação",
                ].map((item) => (
                  <div key={item} className="space-y-2">
                    <Label className="text-sm font-medium">{item}</Label>
                    <RadioGroup defaultValue="independente" className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="independente" id={`${item}-ind`} />
                        <Label htmlFor={`${item}-ind`} className="text-sm font-normal cursor-pointer">
                          Independente (0)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dependente" id={`${item}-dep`} />
                        <Label htmlFor={`${item}-dep`} className="text-sm font-normal cursor-pointer">
                          Dependente (1)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Atividades Instrumentais de Vida Diária (AIVD's)</CardTitle>
                <CardDescription>Escala de Lawton-Brody</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Usar o telefone",
                  "Fazer compras",
                  "Preparar refeições",
                  "Tarefas domésticas",
                  "Trabalhos manuais",
                  "Lavar roupas",
                  "Meio de transporte",
                  "Uso de medicamentos",
                  "Manuseio de dinheiro",
                ].map((item) => (
                  <div key={item} className="space-y-2">
                    <Label className="text-sm font-medium">{item}</Label>
                    <RadioGroup defaultValue="capaz" className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="incapaz" id={`${item}-incapaz`} />
                        <Label htmlFor={`${item}-incapaz`} className="text-sm font-normal cursor-pointer">
                          Incapaz (1)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ajuda" id={`${item}-ajuda`} />
                        <Label htmlFor={`${item}-ajuda`} className="text-sm font-normal cursor-pointer">
                          Necessita de Ajuda (2)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="capaz" id={`${item}-capaz`} />
                        <Label htmlFor={`${item}-capaz`} className="text-sm font-normal cursor-pointer">
                          Totalmente Capaz (3)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Outras Escalas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pfeffer">Índice de Pfeffer (Escore)</Label>
                  <Input id="pfeffer" type="number" placeholder="0-30" className="max-w-xs" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="barthel">Índice de Barthel (Escore)</Label>
                  <Input id="barthel" type="number" placeholder="0-100" className="max-w-xs" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 2: Cognição */}
          <TabsContent value="cognicao" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Instrumentos Específicos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Mini-Exame do Estado Mental (MEEM)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="meem-temporal">Orientação Temporal</Label>
                      <Input id="meem-temporal" type="number" placeholder="0-5" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="meem-espacial">Orientação Espacial</Label>
                      <Input id="meem-espacial" type="number" placeholder="0-5" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="meem-registro">Registro</Label>
                      <Input id="meem-registro" type="number" placeholder="0-3" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="meem-atencao">Atenção/Cálculo</Label>
                      <Input id="meem-atencao" type="number" placeholder="0-5" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="meem-evocacao">Evocação</Label>
                      <Input id="meem-evocacao" type="number" placeholder="0-3" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="meem-linguagem">Linguagem</Label>
                      <Input id="meem-linguagem" type="number" placeholder="0-9" />
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <Label htmlFor="meem-total" className="text-base font-semibold">
                      Score Total MEEM
                    </Label>
                    <Input id="meem-total" type="number" placeholder="0-30" className="max-w-xs mt-2" />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-semibold text-lg">MoCA-Brasil</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="moca-visuoexec">Visuo/Exec</Label>
                      <Input id="moca-visuoexec" type="number" placeholder="0-5" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="moca-nomeacao">Nomeação</Label>
                      <Input id="moca-nomeacao" type="number" placeholder="0-3" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="moca-atencao">Atenção</Label>
                      <Input id="moca-atencao" type="number" placeholder="0-6" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="moca-linguagem">Linguagem</Label>
                      <Input id="moca-linguagem" type="number" placeholder="0-3" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="moca-abstracao">Abstração</Label>
                      <Input id="moca-abstracao" type="number" placeholder="0-2" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="moca-evocacao">Evocação Tardia</Label>
                      <Input id="moca-evocacao" type="number" placeholder="0-5" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="moca-orientacao">Orientação</Label>
                      <Input id="moca-orientacao" type="number" placeholder="0-6" />
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <Label htmlFor="moca-total" className="text-base font-semibold">
                      Score Total MoCA
                    </Label>
                    <Input id="moca-total" type="number" placeholder="0-30" className="max-w-xs mt-2" />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-semibold text-lg">Fluência Verbal (Animais)</h3>
                  <div className="space-y-2">
                    <Label htmlFor="fluencia">Escore</Label>
                    <Input id="fluencia" type="number" placeholder="Número de animais" className="max-w-xs" />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-semibold text-lg">Teste do Relógio</h3>
                  <div className="space-y-2">
                    <Label htmlFor="relogio">Escore</Label>
                    <Input id="relogio" type="number" placeholder="0-10" className="max-w-xs" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 3: Humor/Comportamento */}
          <TabsContent value="humor" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Rastreio de Humor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Escala Geriátrica de Depressão (GDS-15)</h3>
                  <div className="space-y-2">
                    <Label htmlFor="gds15">Escore GDS-15</Label>
                    <Input id="gds15" type="number" placeholder="0-15" className="max-w-xs" />
                    <p className="text-xs text-muted-foreground">≥ 5 sugere depressão</p>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-semibold text-lg">Questionário sobre Saúde do Paciente (PHQ-9)</h3>
                  <div className="space-y-2">
                    <Label htmlFor="phq9">Escore PHQ-9</Label>
                    <Input id="phq9" type="number" placeholder="0-27" className="max-w-xs" />
                    <p className="text-xs text-muted-foreground">≥ 10 sugere depressão moderada/grave</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alterações Comportamentais</CardTitle>
                <CardDescription>Inventário Neuropsiquiátrico (NPI)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Delírio",
                  "Alucinações",
                  "Agitação",
                  "Depressão/Disforia",
                  "Ansiedade",
                  "Euforia",
                  "Apatia",
                  "Desinibição",
                  "Irritabilidade",
                  "Comportamento Motor Aberrante",
                  "Sono",
                  "Apetite",
                ].map((sintoma) => (
                  <div key={sintoma} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-center space-x-2 mb-3">
                      <Checkbox id={`npi-${sintoma}`} />
                      <Label htmlFor={`npi-${sintoma}`} className="font-medium cursor-pointer">
                        {sintoma}
                      </Label>
                    </div>
                    <div className="grid grid-cols-2 gap-4 ml-6">
                      <div className="space-y-2">
                        <Label htmlFor={`${sintoma}-freq`} className="text-sm">
                          Frequência (1-4)
                        </Label>
                        <Input id={`${sintoma}-freq`} type="number" placeholder="1-4" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`${sintoma}-int`} className="text-sm">
                          Intensidade (1-3)
                        </Label>
                        <Input id={`${sintoma}-int`} type="number" placeholder="1-3" />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 4: Mobilidade */}
          <TabsContent value="mobilidade" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Testes de Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Short Physical Performance Battery (SPPB)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sppb-marcha">Velocidade da Marcha</Label>
                      <Input id="sppb-marcha" type="number" placeholder="0-4" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sppb-cadeira">Levantar da Cadeira</Label>
                      <Input id="sppb-cadeira" type="number" placeholder="0-4" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sppb-equilibrio">Equilíbrio</Label>
                      <Input id="sppb-equilibrio" type="number" placeholder="0-4" />
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <Label htmlFor="sppb-total" className="text-base font-semibold">
                      Score Total SPPB
                    </Label>
                    <Input id="sppb-total" type="number" placeholder="0-12" className="max-w-xs mt-2" />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-semibold text-lg">Timed Up and Go (TUG)</h3>
                  <div className="space-y-2">
                    <Label htmlFor="tug">Tempo (segundos)</Label>
                    <Input id="tug" type="number" placeholder="Ex: 12.5" className="max-w-xs" />
                    <p className="text-xs text-muted-foreground">{">"} 13.5s sugere risco de quedas</p>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-semibold text-lg">Força nas Mãos (Preensão)</h3>
                  <div className="space-y-2">
                    <Label htmlFor="preensao">Valor (kgf)</Label>
                    <Input id="preensao" type="number" placeholder="Ex: 25.3" className="max-w-xs" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Histórico de Quedas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-sm font-medium">História de quedas no último ano?</Label>
                  <RadioGroup defaultValue="nao">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="quedas-sim" />
                      <Label htmlFor="quedas-sim" className="cursor-pointer">
                        Sim
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="quedas-nao" />
                      <Label htmlFor="quedas-nao" className="cursor-pointer">
                        Não
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium">Número de quedas:</Label>
                  <RadioGroup>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="quedas-1" />
                      <Label htmlFor="quedas-1" className="cursor-pointer">
                        1
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2-4" id="quedas-2-4" />
                      <Label htmlFor="quedas-2-4" className="cursor-pointer">
                        2 a 4
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5+" id="quedas-5" />
                      <Label htmlFor="quedas-5" className="cursor-pointer">
                        ≥ 5
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 5: Comunicação */}
          <TabsContent value="comunicacao" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Visão</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Uso de lentes corretivas?</Label>
                  <RadioGroup defaultValue="nao">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="lentes-sim" />
                      <Label htmlFor="lentes-sim" className="cursor-pointer">
                        Sim
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="lentes-nao" />
                      <Label htmlFor="lentes-nao" className="cursor-pointer">
                        Não
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium">Dificuldade para ler jornais?</Label>
                  <RadioGroup defaultValue="nao">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="ler-sim" />
                      <Label htmlFor="ler-sim" className="cursor-pointer">
                        Sim
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="ler-nao" />
                      <Label htmlFor="ler-nao" className="cursor-pointer">
                        Não
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="oftalmo">Última visita ao Oftalmologista</Label>
                  <Input id="oftalmo" type="date" className="max-w-xs" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Audição</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Uso de prótese auditiva?</Label>
                  <RadioGroup defaultValue="nao">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="protese-sim" />
                      <Label htmlFor="protese-sim" className="cursor-pointer">
                        Sim
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="protese-nao" />
                      <Label htmlFor="protese-nao" className="cursor-pointer">
                        Não
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium">Teste do sussuro</Label>
                  <RadioGroup>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="positivo" id="sussuro-pos" />
                      <Label htmlFor="sussuro-pos" className="cursor-pointer">
                        Positivo
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="negativo" id="sussuro-neg" />
                      <Label htmlFor="sussuro-neg" className="cursor-pointer">
                        Negativo
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="otorrino">Última visita ao Otorrino</Label>
                  <Input id="otorrino" type="date" className="max-w-xs" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 6: Sistemas Globais */}
          <TabsContent value="sistemas" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Nutrição</CardTitle>
                <CardDescription>Mini Avaliação Nutricional (MAN - Triagem)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="peso">Peso (kg)</Label>
                    <Input id="peso" type="number" placeholder="Ex: 65.5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="estatura">Estatura (m)</Label>
                    <Input id="estatura" type="number" step="0.01" placeholder="Ex: 1.65" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="imc">IMC (kg/m²)</Label>
                    <Input id="imc" type="number" placeholder="Calculado" />
                  </div>
                </div>
                <div className="space-y-2 pt-2 border-t">
                  <Label htmlFor="man">Escore MAN</Label>
                  <Input id="man" type="number" placeholder="0-14" className="max-w-xs" />
                  <p className="text-xs text-muted-foreground">{"<"} 11: risco de desnutrição</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sono</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Satisfeito com o sono?</Label>
                  <RadioGroup defaultValue="sim">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="sono-sim" />
                      <Label htmlFor="sono-sim" className="cursor-pointer">
                        Sim
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="sono-nao" />
                      <Label htmlFor="sono-nao" className="cursor-pointer">
                        Não
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium">Apresenta sonolência excessiva?</Label>
                  <RadioGroup defaultValue="nao">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="sonolencia-sim" />
                      <Label htmlFor="sonolencia-sim" className="cursor-pointer">
                        Sim
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="sonolencia-nao" />
                      <Label htmlFor="sonolencia-nao" className="cursor-pointer">
                        Não
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium">Sintomas relacionados ao sono:</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ronco" />
                      <Label htmlFor="ronco" className="cursor-pointer">
                        Ronco excessivo
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pausas" />
                      <Label htmlFor="pausas" className="cursor-pointer">
                        Pausas na respiração
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="agitacao" />
                      <Label htmlFor="agitacao" className="cursor-pointer">
                        Agitação noturna
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Saúde Bucal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Problemas de mastigação?</Label>
                  <RadioGroup defaultValue="nao">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="mastigacao-sim" />
                      <Label htmlFor="mastigacao-sim" className="cursor-pointer">
                        Sim
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="mastigacao-nao" />
                      <Label htmlFor="mastigacao-nao" className="cursor-pointer">
                        Não
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium">Uso de prótese dentária?</Label>
                  <RadioGroup defaultValue="nao">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="protese-dent-sim" />
                      <Label htmlFor="protese-dent-sim" className="cursor-pointer">
                        Sim
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="protese-dent-nao" />
                      <Label htmlFor="protese-dent-nao" className="cursor-pointer">
                        Não
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium">Xerostomia (Boca seca)?</Label>
                  <RadioGroup defaultValue="nao">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="xero-sim" />
                      <Label htmlFor="xero-sim" className="cursor-pointer">
                        Sim
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="xero-nao" />
                      <Label htmlFor="xero-nao" className="cursor-pointer">
                        Não
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 7: Fatores Contextuais */}
          <TabsContent value="contextuais" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Suporte Familiar</CardTitle>
                <CardDescription>APGAR da Família</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="apgar">Escore APGAR</Label>
                  <Input id="apgar" type="number" placeholder="0-10" className="max-w-xs" />
                  <p className="text-xs text-muted-foreground">0-4: disfunção familiar elevada</p>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium">Mora sozinho?</Label>
                  <RadioGroup defaultValue="nao">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="sozinho-sim" />
                      <Label htmlFor="sozinho-sim" className="cursor-pointer">
                        Sim
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="sozinho-nao" />
                      <Label htmlFor="sozinho-nao" className="cursor-pointer">
                        Não
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium">Reside com familiares?</Label>
                  <RadioGroup defaultValue="sim">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="familia-sim" />
                      <Label htmlFor="familia-sim" className="cursor-pointer">
                        Sim
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="familia-nao" />
                      <Label htmlFor="familia-nao" className="cursor-pointer">
                        Não
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Saúde do Cuidador</CardTitle>
                <CardDescription>Escala de Sobrecarga de Zarit</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="zarit">Escore Zarit</Label>
                  <Input id="zarit" type="number" placeholder="0-88" className="max-w-xs" />
                  <p className="text-xs text-muted-foreground">{">"} 40: sobrecarga moderada a severa</p>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium">Sinais de sobrecarga?</Label>
                  <RadioGroup defaultValue="nao">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="sobrecarga-sim" />
                      <Label htmlFor="sobrecarga-sim" className="cursor-pointer">
                        Sim
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="sobrecarga-nao" />
                      <Label htmlFor="sobrecarga-nao" className="cursor-pointer">
                        Não
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium">Relação conflituosa?</Label>
                  <RadioGroup defaultValue="nao">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="conflito-sim" />
                      <Label htmlFor="conflito-sim" className="cursor-pointer">
                        Sim
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="conflito-nao" />
                      <Label htmlFor="conflito-nao" className="cursor-pointer">
                        Não
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
          <Button size="lg" className="flex-1 sm:flex-none">
            <CheckCircle2 className="mr-2 h-5 w-5" />
            Finalizar AGA e Ir para Plano de Cuidados
          </Button>
          <Button variant="outline" size="lg" className="flex-1 sm:flex-none bg-transparent">
            <Save className="mr-2 h-5 w-5" />
            Salvar Rascunho
          </Button>
        </div>
      </div>
    </div>
  )
}
