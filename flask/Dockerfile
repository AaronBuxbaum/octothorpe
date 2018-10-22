FROM python:3.7
WORKDIR /app
ADD requirements.txt .
RUN pip install -r requirements.txt
ADD . .
ENTRYPOINT ["python"]
CMD ["server.py"]