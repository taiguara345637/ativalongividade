"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Check } from "lucide-react"

type Answer = string | string[]

type Answers = {
  [key: number]: Answer
}

const STEPS = [
  { id: 1, title: "Idade" },
  { id: 2, title: "Percepção da Saúde" },
  { id: 3, title: "Incapacidades Funcionais" },
  { id: 4, title: "Cognição" },
  { id: 5, title: "Humor" },
  { id: 6, title: "Mobilidade" },
  { id: 7, title: "Comunicação" },
  { id: 8, title: "Comorbidades" },
]

export default function IVCF20Assessment() {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState<Answers>({})
  const [showResults, setShowResults] = useState(false)

  const handleRadioChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleCheckboxChange = (questionId: number, value: string, checked: boolean) => {
    setAnswers((prev) => {
      const current = (prev[questionId] || []) as string[]
      if (checked) {
        return { ...prev, [questionId]: [...current, value] }
      } else {
        return { ...prev, [questionId]: current.filter((v) => v !== value) }
      }
    })
  }

  const calculateScore = () => {
    let score = 0

    // Q1: Idade
    if (answers[1] === "75-84") score += 2
    if (answers[1] === "85+") score += 3

    // Q2: Percepção da Saúde
    if (answers[2] === "regular-ruim") score += 1

    // Q3-6: Incapacidades Funcionais
    if (answers[3] === "sim") score += 1
    if (answers[4] === "sim") score += 1
    if (answers[5] === "sim") score += 2
    if (answers[6] === "sim") score += 2

    // Q7-9: Cognição
    if (answers[7] === "sim") score += 1
    if (answers[8] === "sim") score += 1
    if (answers[9] === "sim") score += 2

    // Q10-11: Humor
    if (answers[10] === "sim") score += 1
    if (answers[11] === "sim") score += 1

    // Q12-17: Mobilidade
    if (answers[12] === "sim") score += 1
    if (answers[13] === "sim") score += 1
    if (answers[14] === "sim") score += 2
    if (answers[15] === "sim") score += 2
    if (answers[16] === "sim") score += 1
    if (answers[17] === "sim") score += 1

    // Q18-19: Comunicação
    if (answers[18] === "sim") score += 1
    if (answers[19] === "sim") score += 1

    // Q20: Comorbidades
    const comorbidades = (answers[20] || []) as string[]
    if (comorbidades.length > 0) score += comorbidades.length

    return score
  }

  const getClassification = (score: number) => {
    if (score >= 15) return { level: "ALTA VULNERABILIDADE", subtitle: "(Idoso Frágil)", color: "text-destructive" }
    if (score >= 7)
      return { level: "VULNERABILIDADE MODERADA", subtitle: "(Em Risco de Fragilização)", color: "text-warning" }
    return { level: "BAIXA VULNERABILIDADE", subtitle: "(Idoso Robusto)", color: "text-success" }
  }

  const handleNext = () => {
    if (currentStep < 8) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  if (showResults) {
    const score = calculateScore()
    const classification = getClassification(score)

    return (
      <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Card className="border-2">
            <CardHeader className="text-center space-y-4 pb-8">
              <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-3xl sm:text-4xl font-bold">Resultado do IVCF-20</CardTitle>
              <CardDescription className="text-base">
                Avaliação concluída para <span className="font-semibold text-foreground">Maria Silva Santos</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center space-y-4 py-8 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Score Total</p>
                  <p className="text-6xl font-bold text-primary">{score}</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className={`text-2xl font-bold ${classification.color}`}>{classification.level}</p>
                  <p className="text-lg text-muted-foreground mt-1">{classification.subtitle}</p>
                </div>
              </div>

              <div className="bg-secondary/50 border border-border rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-foreground">Referência de Classificação:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-success mt-1.5 flex-shrink-0" />
                    <p>
                      <span className="font-semibold">0-6 pontos:</span> Baixa vulnerabilidade (Idoso Robusto)
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-warning mt-1.5 flex-shrink-0" />
                    <p>
                      <span className="font-semibold">7-14 pontos:</span> Vulnerabilidade Moderada (Em Risco de
                      Fragilização)
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-1.5 flex-shrink-0" />
                    <p>
                      <span className="font-semibold">≥15 pontos:</span> Alta Vulnerabilidade (Idoso Frágil)
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button className="flex-1 h-12 text-base font-medium" size="lg">
                  🧭 Iniciar Avaliação Geriátrica Ampla (AGA)
                </Button>
                <Button
                  variant="outline"
                  className="sm:w-auto h-12 bg-transparent"
                  onClick={() => {
                    setShowResults(false)
                    setCurrentStep(1)
                    setAnswers({})
                  }}
                >
                  Voltar ao Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">Avaliação IVCF-20</h1>
          <p className="text-muted-foreground text-base">
            Paciente: <span className="font-semibold text-foreground">Maria Silva Santos</span>
          </p>
        </div>

        {/* Progress Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-foreground">
              Passo {currentStep} de {STEPS.length}: {STEPS[currentStep - 1].title}
            </p>
            <p className="text-sm text-muted-foreground">{Math.round((currentStep / STEPS.length) * 100)}% concluído</p>
          </div>
          <div className="relative">
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300 ease-in-out"
                style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex justify-between mt-3">
            {STEPS.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col items-center gap-1 ${
                  index + 1 <= currentStep ? "opacity-100" : "opacity-30"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    index + 1 < currentStep
                      ? "bg-primary text-primary-foreground"
                      : index + 1 === currentStep
                        ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                        : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {index + 1 < currentStep ? <Check className="w-4 h-4" /> : step.id}
                </div>
                <span className="text-xs text-center hidden sm:block max-w-[80px] leading-tight">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl">{STEPS[currentStep - 1].title}</CardTitle>
            <CardDescription>Responda às questões abaixo para continuar a avaliação</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Idade */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <Label className="text-base font-medium">1. Qual é a sua idade?</Label>
                <RadioGroup value={(answers[1] as string) || ""} onValueChange={(value) => handleRadioChange(1, value)}>
                  <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="60-74" id="age1" />
                    <Label htmlFor="age1" className="flex-1 cursor-pointer font-normal">
                      60-74 anos
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="75-84" id="age2" />
                    <Label htmlFor="age2" className="flex-1 cursor-pointer font-normal">
                      75-84 anos
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="85+" id="age3" />
                    <Label htmlFor="age3" className="flex-1 cursor-pointer font-normal">
                      85 anos ou mais
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Step 2: Percepção da Saúde */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <Label className="text-base font-medium">
                  2. Em geral, comparando com outras pessoas de sua idade, você diria que sua saúde é:
                </Label>
                <RadioGroup value={(answers[2] as string) || ""} onValueChange={(value) => handleRadioChange(2, value)}>
                  <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="excelente-boa" id="health1" />
                    <Label htmlFor="health1" className="flex-1 cursor-pointer font-normal">
                      Excelente, muito boa ou boa
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="regular-ruim" id="health2" />
                    <Label htmlFor="health2" className="flex-1 cursor-pointer font-normal">
                      Regular ou ruim
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Step 3: Incapacidades Funcionais */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <p className="text-sm text-muted-foreground">Nos últimos 12 meses, por problemas de saúde, você...</p>

                {[
                  { id: 3, text: "3. ...deixou de fazer compras?" },
                  { id: 4, text: "4. ...deixou de controlar seu dinheiro, gastos ou pagar contas?" },
                  { id: 5, text: "5. ...deixou de realizar pequenos trabalhos domésticos?" },
                  { id: 6, text: "6. ...deixou de tomar banho sozinho?" },
                ].map((q) => (
                  <div key={q.id} className="space-y-3">
                    <Label className="text-base font-medium">{q.text}</Label>
                    <RadioGroup
                      value={(answers[q.id] as string) || ""}
                      onValueChange={(value) => handleRadioChange(q.id, value)}
                    >
                      <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="nao" id={`q${q.id}-nao`} />
                        <Label htmlFor={`q${q.id}-nao`} className="flex-1 cursor-pointer font-normal">
                          Não
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="sim" id={`q${q.id}-sim`} />
                        <Label htmlFor={`q${q.id}-sim`} className="flex-1 cursor-pointer font-normal">
                          Sim
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                ))}
              </div>
            )}

            {/* Step 4: Cognição */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <p className="text-sm text-muted-foreground">Nos últimos 12 meses...</p>

                {[
                  { id: 7, text: "7. ...algum familiar ou amigo falou que você está ficando esquecido?" },
                  { id: 8, text: "8. ...este esquecimento está piorando nos últimos meses?" },
                  {
                    id: 9,
                    text: "9. ...este esquecimento está impedindo a realização de alguma atividade do cotidiano?",
                  },
                ].map((q) => (
                  <div key={q.id} className="space-y-3">
                    <Label className="text-base font-medium">{q.text}</Label>
                    <RadioGroup
                      value={(answers[q.id] as string) || ""}
                      onValueChange={(value) => handleRadioChange(q.id, value)}
                    >
                      <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="nao" id={`q${q.id}-nao`} />
                        <Label htmlFor={`q${q.id}-nao`} className="flex-1 cursor-pointer font-normal">
                          Não
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="sim" id={`q${q.id}-sim`} />
                        <Label htmlFor={`q${q.id}-sim`} className="flex-1 cursor-pointer font-normal">
                          Sim
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                ))}
              </div>
            )}

            {/* Step 5: Humor */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <p className="text-sm text-muted-foreground">Nas últimas duas semanas, com que frequência você...</p>

                {[
                  { id: 10, text: "10. ...se sentiu com desânimo, tristeza ou desesperança?" },
                  { id: 11, text: "11. ...perdeu o interesse ou prazer em fazer as coisas?" },
                ].map((q) => (
                  <div key={q.id} className="space-y-3">
                    <Label className="text-base font-medium">{q.text}</Label>
                    <RadioGroup
                      value={(answers[q.id] as string) || ""}
                      onValueChange={(value) => handleRadioChange(q.id, value)}
                    >
                      <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="nao" id={`q${q.id}-nao`} />
                        <Label htmlFor={`q${q.id}-nao`} className="flex-1 cursor-pointer font-normal">
                          Não
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="sim" id={`q${q.id}-sim`} />
                        <Label htmlFor={`q${q.id}-sim`} className="flex-1 cursor-pointer font-normal">
                          Sim
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                ))}
              </div>
            )}

            {/* Step 6: Mobilidade */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <p className="text-sm text-muted-foreground">Avaliação de mobilidade física</p>

                {[
                  { id: 12, text: "12. É incapaz de elevar os braços acima do nível do ombro?" },
                  { id: 13, text: "13. É incapaz de manusear ou segurar pequenos objetos?" },
                  {
                    id: 14,
                    text: "14. Apresenta perda de peso não intencional (> 4,5kg no último ano) OU IMC < 22 OU Panturrilha < 31cm?",
                  },
                  {
                    id: 15,
                    text: "15. Apresenta dificuldade para caminhar capaz de impedir a realização de alguma atividade do cotidiano?",
                  },
                  { id: 16, text: "16. Teve duas ou mais quedas no último ano?" },
                  { id: 17, text: "17. Perde urina ou fezes sem querer?" },
                ].map((q) => (
                  <div key={q.id} className="space-y-3">
                    <Label className="text-base font-medium">{q.text}</Label>
                    <RadioGroup
                      value={(answers[q.id] as string) || ""}
                      onValueChange={(value) => handleRadioChange(q.id, value)}
                    >
                      <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="nao" id={`q${q.id}-nao`} />
                        <Label htmlFor={`q${q.id}-nao`} className="flex-1 cursor-pointer font-normal">
                          Não
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="sim" id={`q${q.id}-sim`} />
                        <Label htmlFor={`q${q.id}-sim`} className="flex-1 cursor-pointer font-normal">
                          Sim
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                ))}
              </div>
            )}

            {/* Step 7: Comunicação */}
            {currentStep === 7 && (
              <div className="space-y-6">
                <p className="text-sm text-muted-foreground">Avaliação de comunicação sensorial</p>

                {[
                  {
                    id: 18,
                    text: "18. Tem problemas de visão capazes de impedir a realização de alguma atividade do cotidiano?",
                  },
                  {
                    id: 19,
                    text: "19. Tem problemas de audição capazes de impedir a realização de alguma atividade do cotidiano?",
                  },
                ].map((q) => (
                  <div key={q.id} className="space-y-3">
                    <Label className="text-base font-medium">{q.text}</Label>
                    <RadioGroup
                      value={(answers[q.id] as string) || ""}
                      onValueChange={(value) => handleRadioChange(q.id, value)}
                    >
                      <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="nao" id={`q${q.id}-nao`} />
                        <Label htmlFor={`q${q.id}-nao`} className="flex-1 cursor-pointer font-normal">
                          Não
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:bg-accent/50 transition-colors">
                        <RadioGroupItem value="sim" id={`q${q.id}-sim`} />
                        <Label htmlFor={`q${q.id}-sim`} className="flex-1 cursor-pointer font-normal">
                          Sim
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                ))}
              </div>
            )}

            {/* Step 8: Comorbidades */}
            {currentStep === 8 && (
              <div className="space-y-4">
                <Label className="text-base font-medium">20. Você tem alguma das três condições abaixo?</Label>
                <p className="text-sm text-muted-foreground">Selecione todas as opções que se aplicam</p>
                <div className="space-y-3">
                  {[
                    { value: "cinco-doencas", label: "Cinco ou mais doenças crônicas" },
                    { value: "cinco-medicamentos", label: "Uso regular de cinco ou mais medicamentos" },
                    { value: "internacao-recente", label: "Internação recente, nos últimos 6 meses" },
                  ].map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:bg-accent/50 transition-colors"
                    >
                      <Checkbox
                        id={option.value}
                        checked={((answers[20] || []) as string[]).includes(option.value)}
                        onCheckedChange={(checked) => handleCheckboxChange(20, option.value, checked as boolean)}
                      />
                      <Label htmlFor={option.value} className="flex-1 cursor-pointer font-normal">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="w-full sm:w-auto bg-transparent"
              >
                Voltar
              </Button>
              <Button onClick={handleNext} className="flex-1">
                {currentStep === 8 ? "Finalizar e Calcular Score" : "Próximo"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
