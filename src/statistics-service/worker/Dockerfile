FROM registry.cn-hangzhou.aliyuncs.com/boathouse/dotnet-core-runtime:2.1-stretch-slim AS base
WORKDIR /app

FROM registry.cn-hangzhou.aliyuncs.com/boathouse/boathouse-core-sdk:2.1-stretch AS build
WORKDIR /src
COPY ["Worker.csproj", ""]
RUN dotnet restore "./Worker.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "Worker.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Worker.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Worker.dll"]
CMD dotnet Worker.dll