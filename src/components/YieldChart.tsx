import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const data = [
  { year: 2018, yield: 4.2 },
  { year: 2019, yield: 4.8 },
  { year: 2020, yield: 4.1 },
  { year: 2021, yield: 5.3 },
  { year: 2022, yield: 6.5 },
  { year: 2023, yield: 7.2 },
  { year: 2024, yield: 7.8 },
  { year: 2025, yield: 8.4 },
  { year: 2026, yield: 9.1 },
];

export function YieldChart() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderChart = () => {
      if (!containerRef.current) return;

      // Clear previous chart
      d3.select(containerRef.current).selectAll('*').remove();

      const width = containerRef.current.clientWidth;
      const height = 300;
      const margin = { top: 40, right: 20, bottom: 40, left: 40 };

      const svg = d3.select(containerRef.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('overflow', 'visible');

      const x = d3.scaleLinear()
        .domain(d3.extent(data, d => d.year) as [number, number])
        .range([margin.left, width - margin.right]);

      const y = d3.scaleLinear()
        .domain([3, 10]) // Fixed domain for yield percentages
        .range([height - margin.bottom, margin.top]);

      // Add grid lines
      const yAxisGrid = d3.axisLeft(y)
        .tickSize(-(width - margin.left - margin.right))
        .tickFormat(() => '')
        .ticks(5);

      svg.append('g')
        .attr('class', 'y-grid')
        .attr('transform', `translate(${margin.left},0)`)
        .call(yAxisGrid)
        .selectAll('line')
        .attr('stroke', 'rgba(255,255,255,0.05)')
        .attr('stroke-dasharray', '4,4');

      svg.select('.y-grid').select('.domain').remove();

      // Line generator
      const line = d3.line<(typeof data)[0]>()
        .curve(d3.curveMonotoneX)
        .x(d => x(d.year))
        .y(d => y(d.yield));

      // Area generator for gradient
      const area = d3.area<(typeof data)[0]>()
        .curve(d3.curveMonotoneX)
        .x(d => x(d.year))
        .y0(height - margin.bottom)
        .y1(d => y(d.yield));

      // Add gradient
      const defs = svg.append('defs');
      const gradient = defs.append('linearGradient')
        .attr('id', 'yield-gradient')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '0%')
        .attr('y2', '100%');

      gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#C8102E')
        .attr('stop-opacity', 0.2);

      gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#C8102E')
        .attr('stop-opacity', 0);

      // Add area
      svg.append('path')
        .datum(data)
        .attr('fill', 'url(#yield-gradient)')
        .attr('d', area)
        .attr('opacity', 0)
        .transition()
        .duration(1000)
        .attr('opacity', 1);

      // Add line path
      const path = svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#C8102E')
        .attr('stroke-width', 2)
        .attr('d', line);

      // Animate line
      const totalLength = (path.node() as SVGPathElement).getTotalLength();
      path
        .attr('stroke-dasharray', totalLength + ' ' + totalLength)
        .attr('stroke-dashoffset', totalLength)
        .transition()
        .duration(1500)
        .ease(d3.easeLinear)
        .attr('stroke-dashoffset', 0);

      // Add data points
      svg.selectAll('.dot')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('cx', d => x(d.year))
        .attr('cy', d => y(d.yield))
        .attr('r', 0)
        .attr('fill', 'var(--bg-card)')
        .attr('stroke', '#C8102E')
        .attr('stroke-width', 2)
        .transition()
        .delay((_, i) => (i * 1500) / data.length)
        .duration(500)
        .attr('r', 4);

      // X Axis
      svg.append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(data.length).tickFormat(d3.format('d')))
        .attr('font-family', 'monospace')
        .attr('font-size', '10px')
        .attr('color', '#666')
        .select('.domain').attr('stroke', 'rgba(255,255,255,0.1)');

      // Y Axis
      svg.append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).ticks(5).tickFormat(d => d + '%'))
        .attr('font-family', 'monospace')
        .attr('font-size', '10px')
        .attr('color', '#666')
        .select('.domain').remove();
    };

    renderChart();
    
    let timeoutId: number;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => renderChart(), 200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full relative">
      <div ref={containerRef} className="w-full h-[300px]" />
    </div>
  );
}
