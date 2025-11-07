"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Camera, CreditCard, Plus, Heart } from "lucide-react"

export default function PreRegistrationPortal() {
  const [currentStep, setCurrentStep] = useState(1)
  const [contacts, setContacts] = useState([{ id: 1, name: "", relationship: "", phone: "" }])

  const steps = [
    { number: 1, name: "Perfil" },
    { number: 2, name: "Contato e Endereço" },
    { number: 3, name: "Rede de Apoio" },
    { number: 4, name: "Saúde" },
  ]

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const addContact = () => {
    setContacts([...contacts, { id: contacts.length + 1, name: "", relationship: "", phone: "" }])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background py-8 px-4 md:py-12">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-primary/10 p-4">
            <Heart className="h-12 w-12 text-primary" />
          </div>
          <h1 className="mb-2 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Portal de Boas-Vindas Predigero
          </h1>
          <p className="text-pretty text-lg text-muted-foreground">
            Olá, João! Obrigado por nos ajudar a conhecer melhor a D. Maria. Vamos começar?
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-1 items-center">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors ${
                      currentStep === step.number
                        ? "border-primary bg-primary text-primary-foreground"
                        : currentStep > step.number
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-muted-foreground/30 bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`hidden text-xs font-medium sm:block ${
                      currentStep >= step.number ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`mx-2 h-0.5 flex-1 ${
                      currentStep > step.number ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <Card className="p-6 shadow-xl md:p-8">
          {/* Step 1: Perfil */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-foreground">Sobre a D. Maria</h2>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nome Completo</Label>
                  <Input id="fullName" placeholder="Digite o nome completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="socialName">Nome Social (se aplicável)</Label>
                  <Input id="socialName" placeholder="Digite o nome social" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthDate">Data de Nascimento</Label>
                  <Input id="birthDate" type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Gênero</Label>
                  <RadioGroup defaultValue="feminino" className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="feminino" id="feminino" />
                      <Label htmlFor="feminino" className="cursor-pointer font-normal">
                        Feminino
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="masculino" id="masculino" />
                      <Label htmlFor="masculino" className="cursor-pointer font-normal">
                        Masculino
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="outro" id="outro" />
                      <Label htmlFor="outro" className="cursor-pointer font-normal">
                        Outro
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Contato e Endereço */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-foreground">Contato e Endereço</h2>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" type="tel" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="email@exemplo.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Endereço Completo</Label>
                  <Input id="address" placeholder="Rua, número, complemento" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade</Label>
                    <Input id="city" placeholder="Cidade" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">Estado</Label>
                    <Input id="state" placeholder="Estado" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" placeholder="00000-000" />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Rede de Apoio */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-foreground">Rede de Apoio</h2>
                <p className="text-sm text-muted-foreground">Contatos familiares que podem ajudar no cuidado</p>
              </div>
              <div className="space-y-6">
                {contacts.map((contact, index) => (
                  <Card key={contact.id} className="border-2 border-dashed p-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-muted-foreground">Contato {index + 1}</h3>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`contact-name-${contact.id}`}>Nome Completo</Label>
                        <Input id={`contact-name-${contact.id}`} placeholder="Digite o nome" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`contact-relationship-${contact.id}`}>Parentesco</Label>
                        <Input id={`contact-relationship-${contact.id}`} placeholder="Ex: Filho, Filha, Neto..." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`contact-phone-${contact.id}`}>Telefone</Label>
                        <Input id={`contact-phone-${contact.id}`} type="tel" placeholder="(00) 00000-0000" />
                      </div>
                    </div>
                  </Card>
                ))}
                <Button type="button" variant="outline" className="w-full bg-transparent" onClick={addContact}>
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Contato
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Saúde */}
          {currentStep === 4 && (
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-foreground">Informações Rápidas de Saúde</h2>
              </div>

              <div className="space-y-2">
                <Label htmlFor="allergies">Alergias (se souber)</Label>
                <Input id="allergies" placeholder="Ex: Dipirona, Penicilina..." />
              </div>

              {/* Medications Upload */}
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Medicamentos em Uso</h3>
                  <p className="text-sm text-muted-foreground">
                    Digitar remédios é complicado! Para ganhar tempo, por favor, tire uma foto das caixinhas de todos os
                    remédios que ela usa.
                  </p>
                </div>
                <label
                  htmlFor="medications-upload"
                  className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary/50 bg-primary/5 p-8 transition-colors hover:border-primary hover:bg-primary/10"
                >
                  <Camera className="mb-4 h-12 w-12 text-primary" />
                  <span className="text-center text-sm font-medium text-foreground">
                    Clique para Enviar Fotos dos Medicamentos
                  </span>
                  <span className="mt-1 text-xs text-muted-foreground">PNG, JPG ou PDF até 10MB</span>
                  <input id="medications-upload" type="file" multiple accept="image/*,.pdf" className="hidden" />
                </label>
              </div>

              {/* Health Insurance Upload */}
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Plano de Saúde</h3>
                  <p className="text-sm text-muted-foreground">
                    Não se preocupe em digitar os números. Uma foto da carteirinha é o suficiente.
                  </p>
                </div>
                <label
                  htmlFor="insurance-upload"
                  className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary/50 bg-primary/5 p-8 transition-colors hover:border-primary hover:bg-primary/10"
                >
                  <CreditCard className="mb-4 h-12 w-12 text-primary" />
                  <span className="text-center text-sm font-medium text-foreground">
                    Clique para Enviar Foto da Carteirinha
                  </span>
                  <span className="mt-1 text-xs text-muted-foreground">PNG ou JPG até 10MB</span>
                  <input id="insurance-upload" type="file" accept="image/*" className="hidden" />
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="min-w-[100px] bg-transparent"
            >
              Voltar
            </Button>
            <Button type="button" onClick={handleNext} disabled={currentStep === 4} className="min-w-[100px]">
              {currentStep === 4 ? "Finalizar" : "Próximo"}
            </Button>
          </div>
        </Card>

        {/* Footer Text */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Suas informações estão seguras e protegidas conosco
        </p>
      </div>
    </div>
  )
}
