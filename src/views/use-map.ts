import { ref } from 'vue'
import * as echarts from 'echarts'

interface IPram{
  name: string
  value: number
}

export default function useMap() {
  const map = ref<any>(null)
  const mapData = ref<IPram[]>([
    { name: '安徽省', value: 32 },
    { name: '福建省', value: 1 },
    { name: '河北省', value: 3 },
    { name: '湖北省', value: 1 },
    { name: '江苏省', value: 30 },
    { name: '江西省', value: 3 },
    { name: '山东省', value: 3 },
    { name: '陕西省', value: 1 },
    { name: '上海市', value: 3 },
    { name: '四川省', value: 1 },
    { name: '浙江省', value: 8 },
    { name: '不详', value: 19 },
  ])

  const getMapJSON = async () => {
    const res = await fetch('https://ymjrcc.github.io/youmengying/static/china.json')
    const json = await res.json()
    echarts.registerMap('china', json)
    initMap()
  }

  getMapJSON()

  const initMap = () => {
    const option = {
      tooltip: {
        formatter(params: IPram) {
          return `${params.name}: ${params.value || 0}人`
        }
      },
      visualMap: {
        type: 'continuous',
        orient: 'vertical',
        min: 0,
        max: 32,
        inRange: {
          color: ['#7dd3fc', '#0284c7']
          // color: ['#6ee7b7', '#34d399', '#10b981', '#059669', '#047857'] // 端值对应的颜色
        },
        text: [`max: 32`, `min: 0`], // 文本，默认为数值文本
        precision: 0,
        align: 'right',
        itemWidth: 10,
        itemHeight: 80,
        itemBorderRadius: 20,
        textStyle: {
          color: '#666'
        },
        itemStyle: {
          borderRadius: 30
        },
        bottom: 30,
        left: 20
      },
      grid: {
        containLabel: true
      },
      series: [
        {
          name: `数量`,
          type: 'map',
          map: 'china',
          selectedMode: 'false',
          label: {
            show: true,
            color: '#333',
            shadowColor: 'rgba(10, 12, 68, 1)',
            shadowBlur: 2,
            fontSize: 12,
            position: 'inside'
          },
          itemStyle: {
            areaColor: '#bae6fd',
            label: {
              show: true,
              textBorderWidth: 3
            },
            borderColor: '#000',
            borderWidth: 1
          },
          layoutSize: '100%',
          layoutCenter: ['50%', '60%'],
          data: mapData.value
        }
      ]
    }
    const el = document.getElementById('map') as HTMLElement
    el.removeAttribute('_echarts_instance_')
    map.value = echarts.init(el)
    map.value.setOption(option)
  }
}