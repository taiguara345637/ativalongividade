import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, ImageIcon, Download, Eye, Trash2 } from "lucide-react"

const documents = [
  {
    id: 1,
    name: "certidao_nascimento.pdf",
    category: "Certidão",
    categoryColor: "bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-100",
    type: "pdf",
    size: "245 KB",
    date: "15/01/2025",
  },
  {
    id: 2,
    name: "rg_frente.jpg",
    category: "RG",
    categoryColor: "bg-green-100 text-green-900 dark:bg-green-900/30 dark:text-green-100",
    type: "image",
    size: "1.2 MB",
    date: "15/01/2025",
  },
  {
    id: 3,
    name: "receita_medica_jan2025.pdf",
    category: "Receita",
    categoryColor: "bg-purple-100 text-purple-900 dark:bg-purple-900/30 dark:text-purple-100",
    type: "pdf",
    size: "180 KB",
    date: "10/01/2025",
  },
]

export function DocumentList() {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold text-foreground mb-3">Documentos Enviados</h4>
      {documents.map((doc) => (
        <div
          key={doc.id}
          className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted transition-colors"
        >
          {/* Icon */}
          <div className="flex-shrink-0">
            {doc.type === "pdf" ? (
              <FileText className="h-8 w-8 text-red-500" />
            ) : (
              <ImageIcon className="h-8 w-8 text-blue-500" />
            )}
          </div>

          {/* File Info */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{doc.name}</p>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="secondary" className={doc.categoryColor}>
                {doc.category}
              </Badge>
              <span className="text-xs text-muted-foreground">{doc.size}</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{doc.date}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
