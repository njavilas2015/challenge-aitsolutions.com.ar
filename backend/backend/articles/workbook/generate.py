from django.http import HttpResponse
from openpyxl import Workbook

def generate_excel():
    # Crear un nuevo libro de trabajo
    workbook = Workbook()
    worksheet = workbook.active
    worksheet.title = "Reporte de Datos"

    # Agregar datos a la hoja
    worksheet.append(["ID", "Nombre", "Email"])  # Encabezados
    worksheet.append([1, "Juan Pérez", "juan@example.com"])
    worksheet.append([2, "María López", "maria@example.com"])

    # Crear la respuesta HTTP
    response = HttpResponse(
        content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    )
    response['Content-Disposition'] = 'attachment; filename="reporte.xlsx"'

    # Guardar el workbook en el HttpResponse
    workbook.save(response)

    return response