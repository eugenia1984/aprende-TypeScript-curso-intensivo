interface ReportBuilder {
  setHeader(header: string): void
  setContent(content: string): void
  setFooter(footer: string): void
  build(): Report1
}

class Report1 {
  constructor(
    private header:string, 
      private content:string, 
      private footer:string
    ) {}

    generatePDF():void {
      console.log(`Generating PDF report ...`)
      console.log(`Header: ${this.header}`)
      console.log(`Content: ${this.content}`)
      console.log(`Footer: ${this.footer}`)
      console.log(`PDF report generated successfully`)
    }

    generateHML():void {
      console.log(`Generating HTML report ...`)
      console.log(`Header: ${this.header}`)
      console.log(`Content: ${this.content}`)
      console.log(`Footer: ${this.footer}`)
      console.log(`HTML report generated successfully`)
    }
}

class ConcreteReportBuilder implements ReportBuilder {
  private header:string = ''
  private content:string = ''
  private footer:string = ''

  setHeader(header:string): void {
    this.header = header
  }

  setContent(content: string): void {
    this.content = content
  }

  setFooter(footer: string):void {
    this.footer = footer
  }

  build(): Report1 {
    return new Report1(this.header, this.content, this.footer)
  }
}

const reportBuilder: ReportBuilder = new ConcreteReportBuilder()
reportBuilder.setHeader('Report header')
reportBuilder.setContent('Report content')
reportBuilder.setFooter('Report footer')

const report: Report1 = reportBuilder.build()
report.generateHML()
report.generatePDF()