from django.shortcuts import render
from django.http.response import JsonResponse

from orjson import loads
from .libs import parse

def client_app(request):
    if request.method == "POST":
        body = loads(request.body)

        code = body["code"]

        return JsonResponse(parse(code), safe=False)

    return render(request, 'client_app/client_app.html', {})
