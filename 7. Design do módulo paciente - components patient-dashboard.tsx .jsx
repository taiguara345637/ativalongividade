"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ShiftCountdown } from "@/components/shift-countdown"
import { DocumentList } from "@/components/document-list"
import {
  AlertTriangle,
  Phone,
  Stethoscope,
  Building2,
  AlarmClockIcon,
  BookOpen,
  Upload,
  User,
  Users,
  Activity,
} from "lucide-react"

export function PatientDashboard() {
  const [activeTab, setActiveTab] = useState("perfil")

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-[1600px]">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
          {/* Main Content Area (70%) */}
          <div className="space-y-4">
            {/* Fixed Header - Patient Info */}
            <Card className="bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-900">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                  {/* Left Side - Patient Info */}
                  <div className="flex gap-4 items-start">
                    <Avatar className="h-20 w-20 border-2 border-blue-300">
                      <AvatarImage src="/elderly-woman-portrait.png" alt="Maria Silva Santos" />
                      <AvatarFallback className="text-lg bg-blue-200 text-blue-900">MS</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <h1 className="text-2xl font-bold text-blue-950 dark:text-blue-50">Maria Silva Santos</h1>
                      <p className="text-sm text-blue-800 dark:text-blue-200">Nome Social: Maria</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-green-500 text-white hover:bg-green-600">Ativo</Badge>
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100"
                        >
                          85 anos
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100"
                        >
                          👵 85-89
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Critical Info Boxes */}
                  <div className="space-y-3 lg:max-w-md">
                    <div className="flex items-start gap-2 p-3 bg-red-100 border border-red-300 rounded-lg dark:bg-red-950/30 dark:border-red-900">
                      <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-red-900 dark:text-red-100">Alergias:</p>
                        <p className="text-sm text-red-800 dark:text-red-200">Dipirona, Penicilina</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-blue-100 border border-blue-300 rounded-lg dark:bg-blue-950/30 dark:border-blue-900">
                      <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">Contato de Emergência:</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200">João Silva (Filho)</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200">(11) 98765-4321</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-green-100 border border-green-300 rounded-lg dark:bg-green-950/30 dark:border-green-900">
                      <Stethoscope className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-green-900 dark:text-green-100">
                          Médico de Referência:
                        </p>
                        <p className="text-sm text-green-800 dark:text-green-200">Dr. Carlos Andrade</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-purple-100 border border-purple-300 rounded-lg dark:bg-purple-950/30 dark:border-purple-900">
                      <Building2 className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-purple-900 dark:text-purple-100">UBS de Apoio:</p>
                        <p className="text-sm text-purple-800 dark:text-purple-200">UBS Vila Madalena</p>
                        <p className="text-sm text-purple-800 dark:text-purple-200">(11) 3030-4040</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Caregiver Shift Alert Banner */}
            <Card className="border-yellow-300 bg-yellow-50 dark:bg-yellow-950/20 dark:border-yellow-900">
              <CardContent className="p-4">
                <div className="space-y-3">
                  {/* Normal State */}
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500 text-white hover:bg-green-600">
                      DE PLANTÃO AGORA: Ana Souza (Formal) - (11) 98888-7777
                    </Badge>
                  </div>

                  {/* Alert State */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 bg-yellow-100 border-2 border-yellow-400 rounded-lg dark:bg-yellow-900/30 dark:border-yellow-700">
                    <AlarmClockIcon className="h-6 w-6 text-yellow-700 dark:text-yellow-400 flex-shrink-0" />
                    <div className="flex-1 space-y-2 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="text-sm font-semibold text-yellow-900 dark:text-yellow-100">
                          Troca de turno em:
                        </span>
                        <ShiftCountdown />
                      </div>
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        <span className="font-semibold">Próximo Plantão:</span> Carlos (Informal) - (11) 97777-6666
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabbed Interface */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="perfil">
                  <User className="h-4 w-4 mr-2" />
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="rede">
                  <Users className="h-4 w-4 mr-2" />
                  Rede de Apoio
                </TabsTrigger>
                <TabsTrigger value="saude">
                  <Activity className="h-4 w-4 mr-2" />
                  Saúde e Apoio
                </TabsTrigger>
              </TabsList>

              <TabsContent value="perfil" className="space-y-4 mt-4">
                {/* Informações Pessoais */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Informações Pessoais</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Nome Completo</Label>
                        <Input value="Maria Silva Santos" readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label>Data de Nascimento</Label>
                        <Input value="15/03/1940" readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label>Gênero</Label>
                        <Input value="Feminino" readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label>Nacionalidade</Label>
                        <Input value="Brasileira" readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label>Naturalidade</Label>
                        <Input value="São Paulo, SP" readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label>Escolaridade</Label>
                        <div className="flex gap-2 items-center">
                          <Input value="Ensino Médio Completo" readOnly className="flex-1" />
                          <Badge className="bg-green-500 text-white hover:bg-green-600 flex items-center gap-1">
                            <BookOpen className="h-3 w-3" />
                            Alta Escolaridade
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contatos */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Contatos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Telefone</Label>
                        <Input value="(11) 99876-5432" readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label>Email</Label>
                        <Input value="maria.santos@email.com" readOnly />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Endereço */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Endereço</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>CEP</Label>
                        <Input value="05402-000" readOnly />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label>Rua/Av.</Label>
                        <Input value="Rua Harmonia" readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label>Número</Label>
                        <Input value="123" readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label>Bairro</Label>
                        <Input value="Vila Madalena" readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label>Cidade</Label>
                        <Input value="São Paulo" readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label>Estado</Label>
                        <Input value="SP" readOnly />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Registro de Demandas Iniciais */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Registro de Demandas Iniciais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Registre as demandas iniciais do paciente..."
                      className="min-h-[120px]"
                      defaultValue="Paciente necessita acompanhamento diário para medicação. Apresenta dificuldade de locomoção e requer auxílio para atividades básicas."
                    />
                  </CardContent>
                </Card>

                {/* Upload de Documentos */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Upload de Documentos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Clique para fazer upload ou arraste arquivos aqui</p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG até 10MB</p>
                    </div>

                    <DocumentList />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="rede" className="mt-4">
                <Card>
                  <CardContent className="p-8 text-center text-muted-foreground">
                    Conteúdo da aba Rede de Apoio
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="saude" className="mt-4">
                <Card>
                  <CardContent className="p-8 text-center text-muted-foreground">
                    Conteúdo da aba Saúde e Apoio
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar (30%) */}
          <div className="space-y-4">
            {/* Rede de Apoio (Resumo) */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Rede de Apoio (Resumo)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted-foreground">Cuidadores</h4>
                  <div className="flex gap-3 items-start p-3 bg-muted rounded-lg">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/professional-caregiver.jpg" alt="Ana Souza" />
                      <AvatarFallback className="text-xs">AS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground">Ana Souza (Formal)</p>
                      <p className="text-xs text-muted-foreground">Cuidadora Principal</p>
                      <p className="text-xs text-muted-foreground">(11) 98888-7777</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted-foreground">Familiares</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-muted transition-colors">
                      <User className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">João Silva (Filho)</p>
                        <p className="text-xs text-muted-foreground">Emergência | (11) 98765-4321</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Saúde (Resumo) */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Saúde (Resumo)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted-foreground">Condições Ativas</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-100">
                      Hipertensão
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-orange-100 text-orange-900 dark:bg-orange-900/30 dark:text-orange-100"
                    >
                      Diabetes Tipo 2
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-100"
                    >
                      Artrite
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted-foreground">Medicamentos (Em uso: 3)</h4>
                  <Button variant="outline" className="w-full bg-transparent" size="sm">
                    Visualizar Lista
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
