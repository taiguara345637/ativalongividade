"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

type Problem = {
  id: string
  name: string
}

type Intervention = {
  id: string
  title: string
  type: string
  status: string
  assignedTo: string
  meta?: string
  relatedProblems: string[]
}

export default function PCPDashboard() {
  const [problems, setProblems] = useState<Problem[]>([
    { id: "1", name: "Risco de Queda" },
    { id: "2", name: "Polifarmácia" },
    { id: "3", name: "Sobrecarga de Cuidador" },
    { id: "4", name: "Declínio Cognitivo Leve" },
  ])
  const [selectedProblem, setSelectedProblem] = useState<string>("1")
  const [newProblem, setNewProblem] = useState("")

  const [interventions, setInterventions] = useState<Intervention[]>([
    {
      id: "1",
      title: "Encaminhar para Fisioterapia (Marcha e Equilíbrio)",
      type: "Reabilitadora",
      status: "Pendente",
      assignedTo: "Equipe (Fisioterapia)",
      meta: "Reduzir risco de queda em 30%",
      relatedProblems: ["1"],
    },
    {
      id: "2",
      title: "Revisar prescrição de Benzodiazepínicos",
      type: "Curativa/Paliativa",
      status: "Pendente",
      assignedTo: "Profissional (Eu)",
      relatedProblems: ["1", "2"],
    },
  ])

  // Form state
  const [interventionType, setInterventionType] = useState("")
  const [description, setDescription] = useState("")
  const [meta, setMeta] = useState("")
  const [assignedTo, setAssignedTo] = useState("")
  const [status, setStatus] = useState("")

  const addProblem = () => {
    if (newProblem.trim()) {
      setProblems([...problems, { id: Date.now().toString(), name: newProblem.trim() }])
      setNewProblem("")
    }
  }

  const saveIntervention = () => {
    if (description.trim() && interventionType && assignedTo && status) {
      setInterventions([
        ...interventions,
        {
          id: Date.now().toString(),
          title: description.trim(),
          type: interventionType,
          status,
          assignedTo,
          meta: meta.trim() || undefined,
          relatedProblems: [selectedProblem],
        },
      ])
      // Reset form
      setInterventionType("")
      setDescription("")
      setMeta("")
      setAssignedTo("")
      setStatus("")
    }
  }

  const getSelectedProblemName = () => {
    return problems.find((p) => p.id === selectedProblem)?.name || ""
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Preventiva":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Curativa/Paliativa":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Reabilitadora":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pendente":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Em Andamento":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-semibold text-foreground">
            Plano de Cuidados Personalizado (PCP) - Maria Silva Santos
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Column - Problem List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">1. Lista de Problemas (Diagnóstico da AGA)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Add Problem Form */}
                <div className="space-y-2">
                  <Label htmlFor="new-problem">Novo Problema/Diagnóstico</Label>
                  <div className="flex gap-2">
                    <Input
                      id="new-problem"
                      placeholder="Ex: Risco de Queda"
                      value={newProblem}
                      onChange={(e) => setNewProblem(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          addProblem()
                        }
                      }}
                    />
                    <Button onClick={addProblem} size="sm">
                      Adicionar
                    </Button>
                  </div>
                </div>

                {/* Problem List */}
                <div className="space-y-2">
                  {problems.map((problem) => (
                    <button
                      key={problem.id}
                      onClick={() => setSelectedProblem(problem.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-colors ${
                        selectedProblem === problem.id
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            selectedProblem === problem.id ? "bg-primary-foreground" : "bg-muted-foreground"
                          }`}
                        />
                        <span className="font-medium">{problem.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Interventions */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">2. Plano de Intervenções (Ações)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Add Intervention Form */}
                <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
                  <div className="text-sm text-muted-foreground">
                    Associado ao Problema:{" "}
                    <span className="font-semibold text-foreground">[ {getSelectedProblemName()} ]</span>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="intervention-type">Tipo de Intervenção</Label>
                    <Select value={interventionType} onValueChange={setInterventionType}>
                      <SelectTrigger id="intervention-type">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Preventiva">Preventiva</SelectItem>
                        <SelectItem value="Curativa/Paliativa">Curativa/Paliativa</SelectItem>
                        <SelectItem value="Reabilitadora">Reabilitadora</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição da Ação</Label>
                    <Textarea
                      id="description"
                      placeholder="Descreva a tarefa ou intervenção... (Ex: Encaminhar para Fisioterapia - Foco: Marcha e Equilíbrio)"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="meta">Meta Terapêutica (Opcional)</Label>
                    <Input
                      id="meta"
                      placeholder="Qual o objetivo? (Ex: Reduzir risco de queda em 30%)"
                      value={meta}
                      onChange={(e) => setMeta(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="assigned-to">Atribuir a:</Label>
                      <Select value={assignedTo} onValueChange={setAssignedTo}>
                        <SelectTrigger id="assigned-to">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Profissional (Eu)">Profissional (Eu)</SelectItem>
                          <SelectItem value="Cuidador (Ana Souza)">Cuidador (Ana Souza)</SelectItem>
                          <SelectItem value="Equipe (Fisioterapia)">Equipe (Fisioterapia)</SelectItem>
                          <SelectItem value="Familiar (João Silva)">Familiar (João Silva)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="status">Status:</Label>
                      <Select value={status} onValueChange={setStatus}>
                        <SelectTrigger id="status">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Pendente">Pendente</SelectItem>
                          <SelectItem value="Em Andamento">Em Andamento</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button onClick={saveIntervention} className="w-full">
                    Salvar Intervenção
                  </Button>
                </div>

                {/* Intervention List */}
                <div className="space-y-4">
                  {interventions
                    .filter((i) => i.relatedProblems.includes(selectedProblem))
                    .map((intervention) => (
                      <Card key={intervention.id} className="border-l-4 border-l-primary">
                        <CardContent className="pt-4 space-y-3">
                          <h3 className="font-semibold text-foreground">{intervention.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge className={getTypeColor(intervention.type)}>{intervention.type}</Badge>
                            <Badge className={getStatusColor(intervention.status)}>{intervention.status}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Atribuído a:</span> {intervention.assignedTo}
                          </p>
                          {intervention.meta && (
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">Meta:</span> {intervention.meta}
                            </p>
                          )}
                          {intervention.relatedProblems.length > 1 && (
                            <div className="flex flex-wrap gap-1 text-sm">
                              <span className="text-muted-foreground font-medium">Relacionado a:</span>
                              {intervention.relatedProblems.map((problemId) => {
                                const problem = problems.find((p) => p.id === problemId)
                                return problem ? (
                                  <Badge key={problemId} variant="outline">
                                    {problem.name}
                                  </Badge>
                                ) : null
                              })}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
